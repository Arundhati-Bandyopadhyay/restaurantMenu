import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false); 
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      console.log('User signed up:', userCredential.user);
      navigate('/menu'); // Navigate to menu after successful sign up
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
    setError(null); // Clear any previous errors when switching modes
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
            <h2 className="text-2xl font-semibold mb-6 text-center">{isSignUp ? 'Sign Up' : 'Login'}</h2>
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
              <button onClick={toggleSignUp} className="text-sm text-gray-600 hover:underline">
                {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
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