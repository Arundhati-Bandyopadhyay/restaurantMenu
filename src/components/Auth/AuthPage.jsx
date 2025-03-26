import React, { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = async () => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log('User signed up:', userCredential.user);
      navigate('/menu');
    } catch (error) {
      setError(error.message);
      console.error('Sign up error:', error);
    }
  };

  const handleSignIn = async () => {
    try {
      setError(null);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log('User signed in:', userCredential.user);
      navigate('/menu');
    } catch (error) {
      setError(error.message);
      console.error('Sign in error:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      
      setUser(user);
      console.log('Google user signed in:', user);
      navigate('/menu');
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      
      setError(errorMessage);
      console.error('Google Sign-In error:', {
        errorCode,
        errorMessage,
        email,
        credential
      });
    }
  };

  const handleSignOut = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
      console.log('User signed out');
    } catch (error) {
      setError(error.message);
      console.error('Sign out error:', error);
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setError(null);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {user ? (
          <div className="text-center">
            <p className="text-lg font-semibold mb-4">Welcome, {user.email}!</p>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {isSignUp ? 'Sign Up' : 'Login'}
            </h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex flex-col items-center">
              <button
                onClick={isSignUp ? handleSignUp : handleSignIn}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
              <button 
                onClick={handleGoogleSignIn}
                className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded w-full mb-2 flex items-center justify-center hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                  <path fill="#FBBC05" d="M11.68 28.18c-1.15-3.43-1.15-7.15 0-10.58V12H4.34A20.048 20.048 0 0 0 2 24c0 3.24.77 6.3 2.34 9.07l7.34-5.89z"/>
                  <path fill="#EA4335" d="M24 9.5c3.25 0 6.18 1.15 8.48 3.42l6.35-6.35C34.88 2.13 29.7 0 24 0 15.4 0 7.96 4.93 4.34 12l7.34 5.7C13.42 13.37 18.27 9.5 24 9.5z"/>
                </svg>
                Sign in with Google
              </button>
              <button 
                onClick={toggleSignUp} 
                className="text-sm text-gray-600 hover:underline mt-2"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "Don't have an account? Sign up"}
              </button>
            </div>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthPage;