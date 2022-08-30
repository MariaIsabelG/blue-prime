import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Nav() {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='bg-blue-700 flex justify-between items-center h-24 w-screen mx-auto px-4 text-black'>
			<img src='https://flowbite.com/docs/images/logo.svg' className='mr-2 h-6 h-9' />
			<h1 className='w-full text-2xl font-bold text-white'>BlueVest</h1>
			<ul className='hidden md:flex'>
				<li className='p-4'>Home</li>
				<li className='p-4'>Company</li>
				<li className='p-4'>Resources</li>
				<li className='p-4'>About</li>
				<li className='p-4'>Contact</li>
			</ul>
			<div onClick={handleNav} className='block md:hidden'>
				{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
			</div>
			<ul
				className={
					nav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'top-0 h-full ease-in-out duration-500 fixed left-[-100%]'
				}>
				<h1 className='w-full text-3xl font-bold text-white m-4'>BlueVest</h1>
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
