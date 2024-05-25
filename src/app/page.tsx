'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { app } from './firebase/Config'; 
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useRouter } from "next/navigation";
const auth = getAuth(app);

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  //EE FUNCTION USE CHEYYI FOR SIGNOUT
  const handleSignOut = (): void => {
    setLoading(true);
    signOut(auth);
    router.push("/login");
  }
    
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        console.log(user);
      } else {
        setUser(null);
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

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
    </div>
  );
}
