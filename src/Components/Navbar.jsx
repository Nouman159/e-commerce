import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center bg-blue-600 p-4">
                {/* Logo Section */}
                <div className="text-xl font-bold">
                    <a href="#" className="text-white">COFFEE</a>
                </div>

                {/* Menu Items */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <Link to="/cart" className="text-white hover:text-gray-300">Cart</Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white hover:text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
