
'use client';

import Image from "next/image";
import { useAuth } from './hooks/useAuth';
import { signOut } from 'firebase/auth';

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">G Stacks</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Empowering GITAM Students
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Become a Resource Rockstar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Share class notes, study guides, past exams - anything to help
                your fellow GITAMites!
              </p>
            </div>
          </div>
          <div className="card shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Find Your Study Buddy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with seniors or classmates for mentorship and guidance.
              </p>
            </div>
          </div>
          <div className="card shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Ask Away, No Shame in the Game
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Have a question? Post your doubts and get quick answers from
                fellow GITAMites.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Benefits of G Stacks
          </h2>
          <ul className="list-disc space-y-4 text-gray-600 leading-relaxed">
            <li>Effortless Access to Resources</li>
            <li>Personalized Mentorship</li>
            <li>Clear Your Doubts</li>
            <li>Build Your Network</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">
            Signup
          </button>
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
