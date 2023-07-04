import React from 'react';

function Navbar() {
    return (
        <nav
            className="flex justify-between items-center w-full py-8 px-4 lg:px-10 text-md lg:text-xl text-white font-medium bg-transparent z-10">
            <h1>Swaroop Dhungana</h1>
            <ul className="gap-12 hidden md:flex">
                <button className="cursor-none">Work</button>
                <li className="cursor-none">About</li>
                <li className="cursor-none">Contact</li>
            </ul>
            <p className="md:hidden">Menu</p>
        </nav>
    );
}

export default Navbar;
