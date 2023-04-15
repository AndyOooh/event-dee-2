import { Button, Stat } from 'ui';

export default function Web() {
  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-4'>
      <h1 className='bg-purple-500/20 p-2'>Web Purple bg</h1>
      <button className='btn btn-primary'>Button in Web</button>
      <Button />
      <Stat />
    </div>
  );
}
