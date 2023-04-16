import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/clientApp';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

type Props = {};

function Usermenu({}: Props) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className='navbar-end'>
      <div className='dropdown dropdown-end '>
        <label tabIndex={0} className='btn m-1'>
          {user?.displayName}
        </label>
        <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <button onClick={() => signOut(auth)}>Log out</button>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Usermenu;
