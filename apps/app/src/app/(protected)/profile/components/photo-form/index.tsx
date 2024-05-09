'use client';

import { auth, db, storage } from '__firebase/clientApp';
import { onSelectImage } from '__utils/helpers';
import { ImageUpload } from '__components/ImageUpload';
import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { CurrUserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { BiTrashAlt } from 'react-icons/bi';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { uploadString, getDownloadURL, ref } from 'firebase/storage';
import { ActionButton } from '@repo/ui';

type Props = {};

export const PhotoForm = (props: Props) => {
  const { currentUser } = useContext(CurrUserContext);
  const [placeholder, setplaceholder] = useState(currentUser?.photoURL);
  const [selectedFile, setSelectedFile] = useState<string>(null);
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);

  useEffect(() => {
    if (currentUser) {
      setplaceholder(currentUser?.photoURL);
    }
  }, [currentUser]);

  const onRemoveImage = () => {
    setplaceholder(currentUser?.photoURL);
    setSelectedFile(null);
  };

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const userDocRef = doc(db, 'users', currentUser?.uid);
      const imageRef = ref(storage, `users/${userDocRef.id}/images/profile`);
      await uploadString(imageRef, selectedFile, 'data_url');
      const downloadURL = await getDownloadURL(imageRef);
      const res = await updateProfile({
        photoURL: downloadURL,
      });

      const unsubscribe = onSnapshot(userDocRef, async (doc: any) => {
        if (doc.exists()) {
          await updateDoc(userDocRef, {
            photoURL: downloadURL,
          });
          unsubscribe(); // Stop listening for further changes
        }
      });

      /* reset values */
      setplaceholder(null);
      setSelectedFile(null);
      // selectedFileRef.current.value = null;
    } catch (error) {
      console.error('🚀  file: index.tsx:65  error:', error);
    }
  };

  const indicator = (
    <div className="absolute top-[25%] right-0 rounded-full bg-primary border border-error z-10 p-1 hover:cursor-pointer hover:scale-110">
      <BiTrashAlt
        className="text-2xl text-error font-semibold"
        size={'1rem'}
        onClick={onRemoveImage}
      />
    </div>
  );

  return (
    <form onSubmit={onSubmit}>
      <ImageUpload
        selectedFile={selectedFile}
        placeholder={placeholder}
        indicator={indicator}
        selectedFileRef={selectedFileRef}
        onSelectImage={(e: ChangeEvent<HTMLInputElement>) => onSelectImage(e, setSelectedFile)}
        label="Change your profile photo"
      />
      <ActionButton text="Update" disabled={!selectedFile} />
    </form>
  );
};
