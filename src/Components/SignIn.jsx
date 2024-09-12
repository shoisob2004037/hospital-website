import React, { useState, useEffect } from 'react';
import './SignIn.css';
import GoogleLogo from '../Images/Google.png';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from './firebase';

const SignIn = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Check if the user is already signed in on page load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is signed in, update state
        console.log('User is already signed in:', currentUser);
      } else {
        setUser(null); // No user is signed in, reset state
        console.log('No user is signed in.');
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const signInBtnClick = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const userInfo = result.user;
        setUser(userInfo); // Set user state after successful login
        console.log(userInfo);
      })
      .catch(error => {
        console.log('Error during sign-in:', error);
      });
  };

  const signOutBtnClick = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // Clear user state on logout
        console.log('User logged out');
      })
      .catch(error => {
        console.log('Error during sign-out:', error);
      });
  };

  return (
    <div className="modal fade" id="signinModal" tabIndex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signinModalLabel">Sign In</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* If user is not signed in, show the sign-in button */}
            {!user ? (
              <button type="button" onClick={signInBtnClick} className="btn btn-success w-100">
                <img src={GoogleLogo} alt="Google Logo" style={{ width: '40px', marginRight: '10px' }} />
                Sign In with Google
              </button>
            ) : (
              /* If user is signed in, show user details and a log-out button */
              <div className="text-center">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{ borderRadius: '50%', width: '100px', height: '100px', marginBottom: '10px' }}
                />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                <button type="button" onClick={signOutBtnClick} className="btn btn-danger w-100 mt-3">
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
