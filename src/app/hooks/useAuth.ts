
import { useState, useEffect } from "react";
import { app } from '../firebase/Config'; 
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from "next/navigation";

const auth = getAuth(app);

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

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

  return { user, loading, auth };
}
