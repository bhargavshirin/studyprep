
'use client';
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase/Config';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Spinner from '../components/spinner';

const LoginPage: React.FC = () => {
  const [authInitialized, setAuthInitialized] = useState<boolean>(false);
  const [auth, setAuth] = useState<ReturnType<typeof getAuth> | null>(null);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const authInstance = getAuth(app);
    setAuth(authInstance);
    setAuthInitialized(true);
  }, []);

  const handleGoogleLogin = async (): Promise<void> => {
    setLoading(true);
    try {
      if (!auth) return;
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (error) {
      setError('Error signing in with Google');
    } finally {
      setLoading(false);
    }
  };

  if (!authInitialized) {
    return <div className='w-screen h-screen flex items-center justify-center'><Spinner/></div>;
  }
  
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-3xl w-full max-w-md p-6 bg-white rounded-md shadow-md">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-6 text-black">Login</h1>
            <Link href="/" className="text-gray-600 text-sm">
              Home
            </Link>
          </div>
          
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-black text-white py-2 rounded-md">
            {loading ? <Spinner /> : "Login with Google"}
          </button>

          <Link href="/signup">
            <p className="text-gray-600 text-sm mt-4">
              Don't have an account? Signup
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
