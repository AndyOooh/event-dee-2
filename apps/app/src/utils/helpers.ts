import { AnyObject } from 'yup';

type SetSelectedFile = (file: string) => void;

export const onSelectImage = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedFile: SetSelectedFile
) => {
  const reader = new FileReader();
  if (event.target.files?.[0]) {
    reader.readAsDataURL(event.target.files[0]);
  }

  reader.onload = readerEvent => {
    if (readerEvent.target?.result) {
      setSelectedFile(readerEvent.target?.result as string);
    }
  };
};

export const getChangedFormData = (data: any, dirtyFields: any) => {
  return Object.keys(data).reduce((acc, key) => {
    if (dirtyFields[key]) {
      acc[key] = data[key];
    }
    return acc;
  }, {});
};

/* Converts empty string to null and makes yup ignore null value */
export const stringNullable = (field: AnyObject) =>
  field.transform((value: any) => (value === '' ? null : value)).nullable();

/* For logging form state and data */
export const onTestForm = (formState, data) => {
  const { dirtyFields, isValid, errors } = formState;
  const changedData = getChangedFormData(data, dirtyFields);
  console.log('😁 data', data);
  console.log('💕 changedData', changedData);
  console.log('🤣 dirtyFields', dirtyFields);
  console.log('❤️ isValid', isValid);
  console.log('😒 errors', errors);
};

/* For logging form erros */
export const onError = (errors: any, e: any) => {
  console.log('🚫 errors:', errors, e);
};
