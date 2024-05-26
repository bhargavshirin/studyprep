
'use client';

import Image from "next/image";
import { useAuth } from './hooks/useAuth';
import Hero from "./components/Hero";
import FeaturesBlocks from "./components/FeaturesBlocks";

export default function Home() {
  const { user } = useAuth();
  console.log("user", user);
  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col items-center justify-center">
      <Hero />
      <FeaturesBlocks/>
    </div>
  );
}
