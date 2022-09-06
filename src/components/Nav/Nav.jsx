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
				<div className='justify-between flex flex-wrap ml-16'>
					<div
						onClick={() => history.push('/home')}
						className='flex cursor-pointer mt-4 sm:px-4 py-2.5'>
						<img src='images/blueVestLogo.png' className='mr-3 h-6 sm:h-9' />
						<span className='text-xl font-semibold whitespace-nowrap'>BlueVest</span>
					</div>
					<div className='flex md:order-2 mt-4'>
						<button
							onClick={() => history.push('/login')}
							type='button'
							className='hidden h-12 w-36 md:flex border border-black hover:bg-blue-700 text-white bg-inherit font-small rounded-lg text-sm px-6 py-3.5 text-center md:mr-2'>
							Join Our Team
						</button>
						<button
							onClick={() => history.push('/findPro')}
							type='button'
							className='hidden h-12 w-36 md:flex border border-black text-white bg-slate-500 hover:bg-slate-600 font-small rounded-lg text-sm px-6 py-3.5 text-center md:mr-2'>
							Find Your Pro
						</button>
						{user.id ? (
							<button
								onClick={() => dispatch({ type: 'LOGOUT' })}
								type='button'
								className='hidden h-12 w-26 md:flex text-white bg-inherit hover:bg-blue-700 font-small rounded-lg text-sm px-6 py-3.5 text-center'>
								Log Out
							</button>
						) : (
							<button
								onClick={() => history.push('/login')}
								type='button'
								className='hidden h-12 w-26 md:flex text-white bg-inherit hover:bg-blue-700 font-small rounded-lg text-sm px-6 py-3.5 text-center'>
								Log In
							</button>
						)}
						<div onClick={handleNav} className='block md:hidden'>
							{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
						</div>
					</div>
					<div className='hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
						<div className='flex flex-col bg-inherit rounded-lg border border-gray-100 md:flex-row md:mt-0 md:text-sm md:text-base md:border-0'>
							<button
								onClick={() => history.push('/home')}
								type='button'
								className='hidden h-20 w-24 md:flex text-white hover:bg-blue-800 font-small rounded text-sm px-8 py-7 text-center'>
								Home
							</button>
							<button
								onClick={() => history.push('/resources')}
								type='button'
								className='hidden h-20 w-24 md:flex text-white hover:bg-blue-800 font-small rounded text-sm px-4 py-7 text-center'>
								Resources
							</button>
							<button
								onClick={() => history.push('/about')}
								type='button'
								className='hidden h-20 w-26 md:flex text-white hover:bg-blue-800 font-small rounded text-sm px-6 py-7 text-center'>
								About Us
							</button>
							{user.id && user.access_level === 1 ? (
								<button
									onClick={() => history.push('/admin')}
									type='button'
									className='hidden h-20 w-26 md:flex text-white hover:bg-blue-800 font-small rounded text-sm px-6 py-7 text-center'>
									Admin
								</button>
							) : (
								''
							)}
							{user.id && user.access_level === 2 ? (
								<button
									onClick={() => history.push('/agent')}
									type='button'
									className='hidden h-20 w-26 md:flex text-white hover:bg-blue-800 font-small rounded text-sm px-6 py-7 text-center'>
									Dashboard
								</button>
							) : (
								''
							)}
							{/* <li onClick={() => history.push('/home')} className='cursor-pointer hover:text-white'>
								Home
							</li>
							<li
								onClick={() => history.push('/resources')}
								className='cursor-pointer hover:text-white'>
								Resources
							</li>
							<li
								onClick={() => history.push('/about')}
								className='cursor-pointer hover:text-white'>
								About Us
							</li>
							{user.id && user.access_level === 1 ? (
								<li
									onClick={() => history.push('/admin')}
									className='cursor-pointer hover:text-white'>
									Admin
								</li>
							) : (
								''
							)}
							{user.id && user.access_level === 2 ? (
								<li
									onClick={() => history.push('/agent')}
									className='cursor-pointer hover:text-white'>
									Dashboard
								</li>
							) : (
								''
							)} */}
						</div>
					</div>
				</div>
			</nav>
			<ul
				className={
					nav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
						: 'top-0 h-full ease-in-out duration-500 fixed left-[-100%]'
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
				<li
					onClick={() => {
						history.push('/login');
						handleNav();
					}}
					className='p-4 border-b border-gray-600 text-white'>
					I'm An Agent
				</li>
				<li
					onClick={() => {
						history.push('/findPro');
						handleNav();
					}}
					className='p-4 border-b border-gray-600 text-white'>
					Find Your Pro
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
