import { ChangeEvent, RefObject } from 'react';
import Image from 'next/image';

import placeholderImage from '/public/images/profile-photo-placeholder.jpg';

type Props = {
  selectedFile?: string;
  setSelectedFile: (value: string) => void;
  selectedFileRef: RefObject<HTMLInputElement>;
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ImageUpload = ({ selectedFile, selectedFileRef, onSelectImage }: Props) => {
  return (
    <div className={`flex-center flex-col gap-4`}>
      <div className='relative rounded-full w-72 overflow-hidden aspect-square border border-neutral bg-orange-400'>
        <Image
          src={selectedFile ? selectedFile : placeholderImage}
          fill={true}
          sizes='600'
          priority={true}
          alt='profile photo'
          className='rounded object-cover'
        />
      </div>

      <label className='label flex flex-col'>
        <span className='label-text self-start mb-3'>Choose a profile photo</span>
        <input
          type='file'
          accept='image/x-png,image/gif,image/jpeg'
          ref={selectedFileRef}
          onChange={onSelectImage}
          className='file-input file-input-bordered file-input-sm w-full max-w-xs'
        />
      </label>
    </div>
  );
};