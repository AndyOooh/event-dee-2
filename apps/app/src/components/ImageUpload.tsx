import { ChangeEvent, RefObject } from 'react';
import Image from 'next/image';

import placeholderImage from '/public/images/profile-photo-placeholder.jpg';

type Props = {
  selectedFile?: string;
  // setSelectedFile: (value: string) => void;
  placeholder?: string;
  selectedFileRef: RefObject<HTMLInputElement>;
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
  indicator?: JSX.Element;
  label?: string;
};

export const ImageUpload = ({
  selectedFile,
  placeholder,
  selectedFileRef,
  onSelectImage,
  indicator,
  label = 'Choose a profile photo',
}: Props) => {
  return (
    <div className={`flex-center flex-col gap-4`}>
      <div className='relative rounded-full w-72 aspect-square border border-neutral'>
        {indicator && indicator}
        <Image
          src={selectedFile || placeholder || placeholderImage}
          fill={true}
          sizes='600'
          priority={true}
          alt='profile photo'
          className='rounded-full object-cover'
        />
      </div>

      <label className='label flex flex-col'>
        <span className='label-text self-start mb-3'>{label}</span>
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
