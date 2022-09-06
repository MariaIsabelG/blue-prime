import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
	const [heading, setHeading] = useState('Welcome');
	const history = useHistory();

	const onLogin = (event) => {
		history.push('/login');
	};

	return (
		<div>
			<div className='w-full mt-10 sm:mt-0 md:mt-0 lg:mt-0 '>
			<div className='sm:flex md:flex'>
				<div className="sm:static md:static lg:pl-36 xl:mt-20">
					<div className='px-10 sm:mt-24 md:mt-24 lg:mt-30 text-4xl lg:text-7xl xl:7xl text-gray-900'>
						<h1 className="font-bold">
							Find Your Financial Professional
						</h1>
						<p className='mt-4 text-xl text-gray-500'>Where your time and and insurance needs are valued</p>
						<p className='mt-4 text-xl text-gray-500'>
							Answer a few short quick questions and get connected with us!
						</p>
					</div>
					<div onClick={() => history.push('/findPro')} className='flex items-center justify-center inline-block border-2 rounded-lg bg-green-600 text-white hover:shadow-lg hover:bg-green-700 w-52 h-16 text-3xl mb-10 mt-8 ml-10'>
						Find Your Pro
					</div>
				</div>
				<div className='mt-0 sm:inline-block sm:w-6/12 md:w-6/12 md:inline-block lg:w-6/12 xl:w-6/12 ' aria-hidden='true'>
					<img
						src='images/piggy_bank.jpg'
						alt=''
						className='h-full w-full object-cover object-center'
					/>
				</div>
			</div>
				</div>
			{/* RESOURCES SECTION */}
			<section className='text-white bg-blue-900'>
				<div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
					<div className='max-w-lg mx-auto text-center'>
						<h2 className='text-3xl font-bold sm:text-4xl'>Learn More</h2>

						<p className='mt-4 text-gray-300'>Checkout Our Free Learning Resources</p>
					</div>

					<div className='flex-col flex md:flex-row justify-space-between justify-center items-center mt-8'>
						{/* CATEGORY 1*/}
						<div className='m-3'>
							<a
								className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Category 1</h3>
							</a>
						</div>

						{/* CATEGORY 2 */}
						<div className='m-3'>
							<a
								className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Category 2</h3>
							</a>
						</div>

						{/* CATEGORY 3 */}
						<div className='m-3'>
							<a
								className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Category 3</h3>
							</a>
						</div>

						{/* CATEGORY 4 */}
						<div className='m-3'>
							<a
								className='block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Category 4</h3>
							</a>
						</div>
					</div>

					<div className='mt-8 text-center'>
						<a
							className='inline-flex items-center px-8 py-3 mt-8 text-black bg-white border border-gray-600 rounded hover:bg-transparent active:text-blue-500 focus:outline-none focus:ring'
							href='/get-started'>
							<span className='text-sm font-medium'> Get Started </span>

							<svg
								className='w-5 h-5 ml-3'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
