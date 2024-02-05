import Link from 'next/link';
import { appUrl } from '../../../consts';

function HeaderRight() {
  return (
    <>
      <div className='flex gap-2 navbar-end mr-4 md:mr-0'>
        <Link
          role='button'
          href={`${appUrl}/signup`}
          target='_blank'
          className='btn btn-neutral btn-xs md:btn-sm rounded-3xl normal-case'>
          Hire Talent
        </Link>
      </div>
    </>
  );
}

export default HeaderRight;
