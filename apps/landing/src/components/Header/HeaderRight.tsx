import Link from 'next/link';
import { appUrl } from '../../consts';

function HeaderRight() {
  return (
    <>
      <div className='flex gap-2 navbar-end'>
        <Link
          role='button'
          href={appUrl}
          target='_blank'
          className='btn btn-neutral btn-sm rounded-3xl normal-case'>
          Hire Talent
        </Link>
      </div>
    </>
  );
}

export default HeaderRight;
