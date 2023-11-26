export {}

/* This is generated using copilot. Do not use as is */


// // create a custom hook to which gets the current user from firebase using useAuthState from react-firebase-hooks/auth
// // The hook shuld return the user object and the loading state
// // It shuold also return an update function which updates the user document in firestore
// //  tie this is with recoil if possible.
// // copilot please help me with this. No more comments. Just do it.

// import { auth, db } from '__firebase/clientApp';
// import { Timestamp, getDoc } from 'firebase/firestore';


// export const useAuthState = () => {


//     const [user, loading, error] = useAuthState(auth);
    
//     const updateUserDocument = async (user: any) => {
//         const userRef = getDoc(`users/${user.uid}`);
//         const snapshot = await userRef.get();
//         if (!snapshot.exists) {
//         await userRef.set({
//             displayName: user.displayName,
//             email: user.email,
//             photoURL: user.photoURL,
//             createdAt: Timestamp,
//         });
//         }
//     };
    
//     return { user, loading, error, updateUserDocument };
//     }


  

