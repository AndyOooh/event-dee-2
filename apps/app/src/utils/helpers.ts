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
