import React from 'react';

type Props = {
  type?: 'text' | 'email' | 'password';
  name?: string;
  placeholder?: string;
  autoComplete?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const TextInput = ({
  type = 'text',
  name,
  placeholder,
  autoComplete,
  handleChange,
  className,
}: Props) => {
  const _name = name || type;
  const _placeholder = placeholder || _name.charAt(0).toUpperCase() + _name.slice(1);
  // const _placeholder = 'asadasd';
  const _autoComplete = autoComplete || type;

  return (
    <input
      type={type}
      name={_name}
      placeholder={_placeholder}
      autoComplete={_autoComplete}
      onChange={handleChange}
      className={`${className} input input-bordered w-full focus:outline-none focus:border-accent`}
    />
  );
};
