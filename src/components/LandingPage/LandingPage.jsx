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
			<div className='overflow-hidden bg-white'>
				<div className='pt-16 pb-20 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
					<div className=' mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8'>
						<div className='sm:max-w-lg'>
							<h1 className='font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
								Find Your Financial Professional
							</h1>
							<p className='mt-4 text-xl text-gray-500'>A little bit about Blue Vest.</p>
							<p className='mt-4 text-xl text-gray-500'>
								Answer a few short quick questions and get connected with us!
							</p>
						</div>
						<div>
							<div className='mt-10'>
								{/* Decorative image grid */}
								<div
									aria-hidden='true'
									className='pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-5xl lg:mt-20 sm: mb-5'>
									<div className='md:absolute md:transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
										<div className='flex items-center space-x-6 lg:space-x-8'>
											<div className=' grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
												<img
													src='images/piggy_bank.jpg'
													alt=''
													className='h-full w-full object-cover object-center'
												/>
											</div>
										</div>
									</div>
								</div>
								<div
									onClick={() => history.push('/findPro')}
									className='inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-center font-medium text-white hover:bg-blue-700'>
									Find Your Pro
								</div>
							</div>
						</div>
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
