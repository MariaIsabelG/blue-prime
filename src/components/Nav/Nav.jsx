import React, { useState } from 'react';
import './Nav.css';
import { useSelector } from 'react-redux';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Nav() {
	const [nav, setNav] = useState(false);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div>
			<nav className='h-20 bg-blue-600 px-2 w-full z-20 top-0 left-0 border-b border-gray-200'>
				<div className='justify-between flex ml lg:ml-4'>
					<div
						onClick={() => history.push('/home')}
						className='flex cursor-pointer mt-4 pl-2 py-2.5'>
						<img src='images/blueVestLogo.png' className='mr-3 h-6 h-9' />
						<span className='text-3xl text-white font-semibold whitespace-nowrap'>BlueVest</span>
					</div>
					<div className='flex md:order-2 mt-4'>
						<button
							onClick={() => history.push('/findPro')}
							type='button'
							className='hidden h-10 w-28 md:flex border-2 border-stone-300 text-white font-bold bg-green-500 hover:bg-green-700 font-small rounded-lg flex items-center justify-center md:mr-3 md:text-sm md:w-32 lg:w-36 lg:text-md'>
							Find Your Pro
						</button>
						<button
							onClick={() => history.push('/jointeam')}
							type='button'
							className='hidden h-10 w-28 md:flex border-2 border-stone-300 text-white font-bold bg-blue-500 hover:bg-blue-700 font-small rounded-lg flex items-center justify-center md:mr-3 md:text-sm md:w-32 lg:w-36 lg:text-md'>
							Join Our Team
						</button>
						{user.id ? (
							<button
								onClick={() => dispatch({ type: 'LOGOUT' })}
								type='button'
								className='hidden h-10 w-20 md:flex border-2 border-stone-300 text-white font-bold bg-red-500 hover:bg-red-400 font-small rounded-lg flex items-center justify-center md:mr-3 md:text-sm md:w-24 lg:w-24 lg:text-md'>
								Log Out
							</button>
						) : (
							<button
								onClick={() => history.push('/login')}
								type='button'
								className='hidden h-10 w-20 md:flex border-2 border-stone-300 text-white font-bold bg-blue-500 hover:bg-blue-700 font-small rounded-lg flex items-center justify-center md:mr-3 md:text-sm md:w-28 lg:w-28 lg:text-md'>
								Pro Log In
							</button>
						)}
						<div onClick={handleNav} className='block mt-3 md:hidden'>
							{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
						</div>
					</div>
					<div className='hidden w-3/4 justify-center md:flex md:order-1' id='navbar-sticky'>
						<div className='flex flex-col bg-inherit rounded-lg border border-gray-100 md:flex-row md:mt-0 md:text-sm md:text-base md:border-0'>
							<button
								onClick={() => history.push('/home')}
								type='button'
								className='hidden h-20 w-16 lg:w-24 md:flex text-white hover:bg-blue-800 text-lg py-7 flex items-center justify-center'>
								Home
							</button>
							<button
								onClick={() => history.push('/resources')}
								type='button'
								className='hidden h-20 w-16 lg:w-32 md:flex text-white hover:bg-blue-800 text-lg px-4 lg:px-8 py-7 flex items-center justify-center'>
								Resources
							</button>
							<button
								onClick={() => history.push('/about')}
								type='button'
								className='hidden h-20 w-16 lg:w-28 md:flex text-white hover:bg-blue-800 text-lg py-7 flex items-center justify-center'>
								About Us
							</button>
							{user.id && user.access_level === 1 ? (
								<button
									onClick={() => history.push('/admin')}
									type='button'
									className='hidden h-20 w-16 lg:w-24 md:flex text-white hover:bg-blue-800 text-lg py-7 flex items-center justify-center'>
									Admin
								</button>
							) : (
								''
							)}
							{user.id && user.access_level === 2 ? (
								<button
									onClick={() => history.push('/agent')}
									type='button'
									className='hidden h-20 w-16 lg:w-32 md:flex text-white hover:bg-blue-800 text-lg py-7 flex items-center justify-center'>
									Dashboard
								</button>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</nav>
			<ul
				className={
					nav
						? 'fixed left-0 top-0 w-[60%] z-40 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'top-0 h-full z-40 ease-in-out duration-500 fixed left-[-100%]'
				}>
				<h1
					onClick={() => {
						history.push('/home');
						handleNav();
					}}
					className='w-full text-2xl font-bold text-white m-4'>
					BlueVest
				</h1>
				<li
					onClick={() => {
						history.push('/home');
						handleNav();
					}}
					className='p-4 border-b border-gray-600 text-white'>
					Home
				</li>
				<li
					onClick={() => {
						history.push('/resources');
						handleNav();
					}}
					className='p-4 border-b border-gray-600 text-white'>
					Resources
				</li>
				<li
					onClick={() => {
						history.push('/about');
						handleNav();
					}}
					className='p-4 border-b border-gray-600 text-white'>
					About
				</li>
				{user.id && user.access_level === 1 ? (
					<li
						onClick={() => {
							history.push('/admin');
							handleNav();
						}}
						className='p-4 border-b border-gray-600 text-white'>
						Admin
					</li>
				) : (
					''
				)}
				{user.id && user.access_level === 2 ? (
					<li
						onClick={() => {
							history.push('/agent');
							handleNav();
						}}
						className='p-4 border-b border-gray-600 text-white'>
						Dashboard
					</li>
				) : (
					''
				)}
				<li
					onClick={() => {
						history.push('/jointeam');
						handleNav();
					}}
					className='p-4 border-b border-gray-600 text-white'>
					Join Our Team
				</li>
				<li
					onClick={() => {
						history.push('/findPro');
						handleNav();
					}}
					className='p-4 border-b border-gray-600 text-white'>
					Find Your Pro
				</li>
				{!user.id ? (
					<li
						onClick={() => {
							history.push('/login');
							handleNav();
						}}
						className='p-4 border-b border-gray-600 text-white'>
						Pro Log In
					</li>
				) : (
					''
				)}
				{user.id ? (
					<li
						onClick={() => {
							dispatch({ type: 'LOGOUT' });
							handleNav();
						}}
						className='p-4 border-b border-gray-600 text-white'>
						Log Out
					</li>
				) : (
					''
				)}
			</ul>
		</div>
	);
}

export default Nav;
