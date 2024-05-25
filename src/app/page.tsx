
'use client';

import Image from "next/image";
import { useAuth } from './hooks/useAuth';
import { signOut } from 'firebase/auth';

export default function Home() {
  const { user, loading, auth } = useAuth();

  const handleSignOut = (): void => {
    signOut(auth);
    window.location.href = "/login";
  }

  if (loading) {
    return (
      <div>
        loading
      </div>
    );
  }

  return (
    <div>
      hi bro, my gmail is {user?.email}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
