/* Might have to make this a client comp */
import { createDocument } from '__firebase/utilities';

export default function TestEmulatorPage() {
  const submitHandler = async () => {
    try {
      await createDocument('emul-test', { id: 123, test: 'it works' });
    } catch (error) {
      console.error('🚀  file: HomeMain.tsx:17  error:', error);
    }
  };
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h1 className='text-3xl'>Test Emulator Page</h1>
      {process.env.NEXT_PUBLIC_EMULATORS_ON === 'true' &&
        process.env.NODE_ENV === 'development' && (
          <button className='btn' onClick={submitHandler}>
            Test Emulator
          </button>
        )}
    </div>
  );
}
