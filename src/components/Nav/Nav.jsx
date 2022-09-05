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
			<nav className='h-20 bg-blue-600 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200'>
				<div className='container flex flex-wrap justify-between items-center mx-auto'>
					<div onClick={() => history.push('/home')} className='flex items-center'>
						<img src='images/blueVestLogo.png' className='mr-3 h-6 sm:h-9' />
						<span className='self-center text-xl font-semibold whitespace-nowrap'>BlueVest</span>
					</div>
					<div className='flex md:order-2'>
						<button
							onClick={() => history.push('/login')}
							type='button'
							className='hidden md:flex text-white bg-inherit hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center md:mr-50'>
							I'm An Agent
						</button>
						<button
							onClick={() => history.push('/findPro')}
							type='button'
							className='hidden md:flex text-white bg-inherit hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center md:mr-50'>
							Find Your Pro
						</button>
						{user.id ? (
							<button
								onClick={() => dispatch({ type: 'LOGOUT' })}
								type='button'
								className='hidden md:flex text-white bg-inherit hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center md:mr-0'>
								Log Out
							</button>
						) : (
							''
						)}
						<div onClick={handleNav} className='block md:hidden'>
							{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
						</div>
					</div>
					<div
						className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
						id='navbar-sticky'>
						<ul className='flex flex-col p-4 mt-4 bg-inherit rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:text-base md:border-0'>
							<li onClick={() => history.push('/home')} className='cursor-pointer hover:text-white'>
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
							)}
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
