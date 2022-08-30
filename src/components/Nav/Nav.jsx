import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Nav() {
	const [nav, setNav] = useState(false);
	const user = useSelector((store) => store.user);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div>
			<nav class='bg-blue-600 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
				<div class='container flex flex-wrap justify-between items-center mx-auto'>
					<div class='flex items-center'>
						<img src='images/blueVestLogo.png' class='mr-3 h-6 sm:h-9' />
						<span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							BlueVest
						</span>
					</div>
					<div class='flex md:order-2'>
						<button
							type='button'
							class='hidden md:flex text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							I'm An Agent
						</button>
						<button
							type='button'
							class='hidden md:flex text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Find A Pro
						</button>
						<div onClick={handleNav} className='block md:hidden'>
							{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
						</div>
					</div>
					<div
						class='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
						id='navbar-sticky'>
						<ul class='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-large md:border-0 dark:border-gray-700 md:bg-blue-600'>
							<li>Home</li>
							<li>Resources</li>
							<li>About Us</li>
						</ul>
					</div>
				</div>
			</nav>
			<ul
				className={
					nav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'top-0 h-full ease-in-out duration-500 fixed left-[-100%]'
				}>
				<h1 className='w-full text-2xl font-bold text-white m-4'>BlueVest</h1>
				<li className='p-4 border-b border-gray-600 text-white'>Home</li>
				<li className='p-4 border-b border-gray-600 text-white'>Company</li>
				<li className='p-4 border-b border-gray-600 text-white'>Resources</li>
				<li className='p-4 border-b border-gray-600 text-white'>About</li>
				<li className='p-4'>Contact</li>
			</ul>
		</div>
	);
}

export default Nav;
