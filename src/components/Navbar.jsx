import React from 'react'
import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className=" text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold">
                    <Link to="/">React App</Link>
                </div>
                {/* Menü Linkleri */}
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:underline">Users</Link>
                    </li>
                    <li>
                        <Link to="/posts" className="hover:underline">All Posts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
