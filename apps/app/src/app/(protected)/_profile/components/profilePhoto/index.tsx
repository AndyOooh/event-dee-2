'use client';

import { auth } from '__firebase/clientApp';
import { onSelectImage } from '__utils/helpers';
import { ImageUpload } from '__components/ImageUpload';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { UserContext } from 'app/(protected)/components/Providers/CurrentUserProvider';
import { BiTrashAlt } from 'react-icons/bi';

type Props = {};

export const ProfilePhoto = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const { currentUser } = useContext(UserContext);
  const [placeholder, setplaceholder] = useState(currentUser?.photoURL);

  const [selectedFile, setSelectedFile] = useState<string>();
  const selectedFileRef = useRef<HTMLInputElement>(null);
  const [updateProfile, loadingUpdate, errorUpdate] = useUpdateProfile(auth);

  useEffect(() => {
    if (currentUser) {
      setplaceholder(currentUser?.photoURL);
    }
  }, [currentUser]);

  const onRemoveImage = () => {
    setplaceholder(null);
  };


  const indicator = (
    <div className='absolute top-[25%] right-0 rounded-full bg-primary border border-error z-10 p-1 hover:cursor-pointer hover:scale-110'>
      <BiTrashAlt className='text-2xl text-error font-semibold' size={'1rem'} onClick={onRemoveImage} />
    </div>
  );

  return (
    <form>
      <ImageUpload
        selectedFile={selectedFile}
        placeholder={placeholder}
        indicator={indicator}
        // setSelectedFile={setSelectedFile}
        selectedFileRef={selectedFileRef}
        onSelectImage={(e: ChangeEvent<HTMLInputElement>) => onSelectImage(e, setSelectedFile)}
        label='Change your profile photo'
      />
    </form>
  );
};
