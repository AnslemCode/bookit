import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import { FaBuilding, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="Bookit"
                className="h-12 w-12"
                priority={true}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Rooms
                </Link>

                {/* Is Authenticated */}
                <>
                  <Link
                    href="/bookings"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Bookings
                  </Link>
                  <Link
                    href="/rooms/add"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                  >
                    Add Room
                  </Link>
                </>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Not Authenticated */}
              <>
                <Link
                  href="/login"
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <FaSignInAlt className="inline mr-1" /> Login
                </Link>
                <Link
                  href="/register"
                  className="mr-3 text-gray-800 hover:text-gray-600"
                >
                  <FaUser className="inline mr-1" /> Register
                </Link>
              </>

              {/* // Is Authenticated */}
              <>
                <Link href="/rooms/my">
                  <FaBuilding className="inline mr-1" /> My Rooms
                </Link>
                <button
                  // onClick={handleLogout}
                  className="mx-3 text-gray-800 hover:text-gray-600"
                >
                  <FaSignOutAlt className="inline mr-1" /> Sign Out
                </button>
              </>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
