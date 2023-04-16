'use client';

import { useRecoilState } from 'recoil';
import { RiCloseCircleFill } from 'react-icons/ri';

import { authModalState } from '../../../atoms/authModalAtom';
import ModalWrapper from '../ModalWrapper';
import OAuthButtons from './OAuthButtons';
import AuthInputs from './inputs';
import ResetPassword from './ResetPassword';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';
import { useEffect } from 'react';

export type ToggleView = (view: string) => void;

function AuthModal() {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) toggleVisible(false);
  }, [user]);

  const toggleVisible = (open: boolean) =>
    setModalState((prev: any) => ({
      ...prev,
      open: open,
    }));

  // const currentUser = useRecoilValue(userState);
  // const [user, error] = useAuthState(auth);

  const handleChangeView: ToggleView = (view: string) => {
    setModalState({
      ...modalState,
      view: view as typeof modalState.view,
    });
  };

  // return modalState.open ? (
  return (
    <ModalWrapper visible={modalState.open} setVisible={toggleVisible}>
      <div className='card w-[32rem] bg-base-100 shadow-xl'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign Up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </h2>
          <button className='btn btn-sm btn-circle absolute right-2 top-2'>
            <RiCloseCircleFill
              className='w-full h-full'
              color={'#37BDF8'}
              onClick={() => toggleVisible(false)}
            />
          </button>
          <div className='flex flex-col gap-4 w-full'>
            {modalState.view === 'login' || modalState.view === 'signup' ? (
              <>
                <OAuthButtons view={modalState.view} />
                OR
                <AuthInputs toggleView={handleChangeView} />
              </>
            ) : (
              <ResetPassword toggleView={handleChangeView} />
            )}
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
  // : null;
}

export default AuthModal;
