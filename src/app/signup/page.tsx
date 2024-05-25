'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { getAuth, createUserWithEmailAndPassword, Auth } from 'firebase/auth';
import { app } from '../firebase/Config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Spinner from '../components/spinner';

interface LoginPageState {
  email: string;
  password: string;
  error: string;
  success: string;
  authInitialized: boolean;
  auth: Auth | null;
}

const SignupPage: React.FC = () => {
  const [state, setState] = useState<LoginPageState>({
    email: '',
    password: '',
    error: '',
    success: '',
    authInitialized: false,
    auth: null,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const authInstance = getAuth(app);
    setState((prevState) => ({
      ...prevState,
      auth: authInstance,
      authInitialized: true,
    }));
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleSignUp = async () => {
    setLoading(true);
    const { email, password, auth } = state;
    try {
      if (auth) {
        await createUserWithEmailAndPassword(auth, email, password);
        setState((prevState) => ({
          ...prevState,
          success: 'Account created successfully',
          email: '',
          password: '',
        }));
      }
    } catch (error) {
      console.error('Error signing up with email and password', error);
      setState((prevState) => ({
        ...prevState,
        error: 'Email already exists / Error signing up',
      }));
    }finally {  
      setLoading(false);
    }
  };

  if (!state.authInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="rounded-3xl w-full max-w-md p-6 bg-white  shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-black">Signup</h1>
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
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
              value={state.password}
              onChange={handlePasswordChange}
              className="w-full border rounded-md py-2 px-3"
              required
            />
          </div>
          {state.error && <div className="text-red-500 text-sm mb-2">{state.error}</div>}
          {!state.error && state.success && <div className="text-green-500 text-sm mb-2">{state.success}</div>}
        </form>
        <Link href="/login">
          <p className="text-gray-600 text-sm mb-2 hover:text-underline">Have an account, Login</p>
        </Link>
        <button
          onClick={handleSignUp}
          className="w-full bg-black text-white py-2 rounded-md"
        >
          {loading ? <Spinner /> : 'Signup with Email'}
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
