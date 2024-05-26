import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Student Doubt Forum</h1>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="#" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </nav>
        <button className="md:hidden flex items-center space-x-2 bg-transparent border border-gray-300 text-gray-300 px-3 py-2 rounded hover:text-white hover:border-white focus:outline-none focus:border-blue-500" type="button">
          <MenuIcon className="h-5 w-5" />
          <span>Menu</span>
        </button>
      </header>
      <main className="flex-1 py-8 px-6 md:px-8">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Post a New Doubt</h2>
          <form className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="font-medium">Title</label>
              <input id="title" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your doubt title" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description" className="font-medium">Description</label>
              <textarea id="description" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Describe your doubt in detail" rows={4} />
            </div>
            <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition duration-200 ease-in-out w-full" type="submit">
              Post Doubt
            </button>
          </form>
        </section>

  <h2 className="text-xl font-bold mb-4">Existing Doubts</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="font-semibold">How to solve this algorithm problem?</div>
      <p className="text-gray-700 mt-2">I'm stuck on this coding problem and need help.</p>
      <p className="text-gray-700 mt-2">I've tried several approaches but can't seem to get the right solution. Any suggestions would be greatly appreciated.</p>
      <div className="flex items-center mt-4">
        <div className="flex items-center">
          <img src="/placeholder-user.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
          <div className="ml-2">
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </div>
        </div>
        <div className="ml-auto flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <ThumbsUpIcon className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <ThumbsDownIcon className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <MessageCircleIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white shadow-md rounded-md p-4">
      <div className="font-semibold">How to solve this algorithm problem?</div>
      <p className="text-gray-700 mt-2">I'm stuck on this coding problem and need help.</p>
      <p className="text-gray-700 mt-2">I've tried several approaches but can't seem to get the right solution. Any suggestions would be greatly appreciated.</p>
      <div className="flex items-center mt-4">
        <div className="flex items-center">
          <img src="/placeholder-user.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
          <div className="ml-2">
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </div>
        </div>
        <div className="ml-auto flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <ThumbsUpIcon className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <ThumbsDownIcon className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <MessageCircleIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    </div>
      </main>
      <footer className="bg-black text-white py-4 px-6 md:px-8 text-center">
        <p>© 2023 Student Doubt Forum. All rights reserved.</p>
      </footer>
    </div>
  );
}

interface MenuIconProps extends React.SVGProps<SVGSVGElement> { }
function MenuIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}



function MessageCircleIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ThumbsDownIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}