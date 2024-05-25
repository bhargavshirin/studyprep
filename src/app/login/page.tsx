'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { getAuth, signInWithEmailAndPassword,Auth, AuthError } from 'firebase/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../firebase/Config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authInitialized, setAuthInitialized] = useState<boolean>(false);
  const [auth, setAuth] = useState<Auth | null>(null);
  const [error, setError] = useState<string>('');
  const [resetEmailSent, setResetEmailSent] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const authInstance = getAuth(app);
    setAuth(authInstance);
    setAuthInitialized(true);
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleEmailLogin = async (): Promise<void> => {
    try {
      if (!auth) return;
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      const authError = error as AuthError;
      if (authError.code === 'auth/wrong-password' || authError.code === 'auth/user-not-found') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('Error signing in with email');
      }
    }
  };

  const handleForgotPassword = async (): Promise<void> => {
    try {
      if (!email) {
        setError('Please enter your email address.');
        return;
      }
      if (!auth) return;
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      setError('');
    } catch (error) {
      setError('Error sending reset email. Please try again.');
    }
  };

  if (!authInitialized) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-3xl  w-full max-w-md p-6 bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-black">Login</h1>

          <form className="mb-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full border rounded-md py-2 px-3"
                required
              />
            </div>
            {
              error && (
                <div className="text-red-500 text-sm mb-2">{error}</div>
              )
            }
            <button
              type="button"
              onClick={handleEmailLogin}
              className="w-full bg-black text-white py-2 rounded-md"
            >
              Login with Email
            </button>
          </form>
          {resetEmailSent ? (
            <div className="text-green-600 text-sm mb-2">
              Password reset email sent. Check your email for instructions.
            </div>
          ) : (
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-grey-600 text-sm mb-1"
            >
              Forgot password? Reset here
            </button>
          )}

          <Link href="/signup">
          <p className="text-gray-600 text-sm mb-2">Don't have an account? Signup</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
