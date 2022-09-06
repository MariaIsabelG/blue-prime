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
			<div className='sm:flex md:flex bg-white'>
				<div className="sm:static md:static lg:pl-36 xl:mt-10">
					<div className='px-10 text-4xl text-gray-900 sm:mt-24 md:mt-24 lg:mt-30 lg:text-7xl xl:mt-32 xl:7xl '>
						<h1 className="font-bold">
							Find Your Financial Professional
						</h1>
						<li className='mt-10 text-xl text-gray-500'>Where your time and and insurance needs are valued.</li>
						<li className='mt-4 text-xl text-gray-500'>We provide a convenient way to find financial professionals in your area.</li>
						<li className='mt-4 text-xl text-gray-500'> Answer a few short quick questions and get connected with us!</li>
					</div>
					<div className="flex">
						<div className="static">
						<div onClick={() => history.push('/findPro')} className='flex items-center justify-center inline-block border-2 rounded-lg bg-green-500 text-white hover:shadow-lg hover:bg-green-700 w-48 h-16 text-2xl mb-10 mt-8 ml-10'>
							Find Your Pro
						</div>
						</div>
					
					<div onClick={() => history.push('/about')} className='flex items-center justify-center inline-block border-2 rounded-lg bg-orange-400 text-white hover:shadow-lg hover:bg-orange-700 w-52 h-16 text-2xl mb-10 mt-8 ml-10'>
						Get to know us!
					</div>
					<div onClick={() => history.push('/resources')} className='flex items-center justify-center inline-block border-2 rounded-lg bg-blue-400 text-white hover:shadow-lg hover:bg-blue-700 w-48 h-16 text-2xl mb-10 mt-8 ml-10 mr-10' >
						Resources 
					</div>
					</div>
				</div>
				<div className='mt-0 sm:inline-block sm:w-6/12 md:w-6/12 inline-block lg:w-6/12 xl:w-7/12' aria-hidden='true'>
					<img
						src='images/piggy_bank.jpg'
						alt=''
						className='h-full w-full object-cover object-center'
					/>
				</div>
			</div>
				</div>
				<div className='pb-12 pt-10 bg-blue-600'>
				<h2 className='text-center text-3xl text-white font-bold sm:text-1xl mb-6 '>
					Our Process
				</h2>
				<div className='border rounded-md border mx-32 mb-4 bg-orange-200 border-2 border-gray-400'>
					<div className='mb-4 mt-4 inline-block'>
						<img src="images/formicon.png" className='font-bold text-2xl text-white w-16 ml-6 mr-6 '/>
					</div>
					<div className='inline-block text-2xl xl:text-xl'>
						<p >
							You complete our quick form and give us information about your current insurance plan
						</p>
					</div>
				</div>
				<div className='border rounded-md mx-32 mb-4 bg-orange-200 border-2 border-gray-400'>
					<div className='mb-4 mt-4 inline-block'>
						<img src="images/connecticon.png" className='font-bold text-2xl text-white w-16 ml-6 mr-6 '/>
					</div>
					<div className='inline-block text-2xl xl:text-xl'>
						<p>We use that information to match you with the financial pros that are right for you</p>
					</div>
				</div>
				<div className='border rounded-md mx-32 mb-4 bg-orange-200 border-2 border-gray-400'>
					<div className='mb-4 mt-4 inline-block'>
						<img src="images/communicationicon.png" className='font-bold text-2xl text-white w-16 ml-6 mr-6 '/>	
					</div>
					<div className='inline-block text-2xl xl:text-xl'>
						<p>
							Your agents will reach out to you within X business days with options to save you money
							and better your financial wellness
						</p>
					</div>
				</div>
			</div>
			{/* RESOURCES SECTION */}
			<section className='text-black bg-white'>
				<div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
					<div className='max-w-lg mx-auto text-center'>
						<h2 className='text-3xl font-bold sm:text-4xl'>Learn More</h2>

						<p className='mt-4 text-gray-600'>Checkout Our Free Learning Resources</p>
					</div>

					<div className='flex-col flex md:flex-row justify-space-between justify-center items-center mt-8'>
						{/* CATEGORY 1*/}
						<div className='m-3 '>
							<a
								className='block p-8 transition bg-yellow-500 border shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-black text-center'>Category 1</h3>
							</a>
						</div>

						{/* CATEGORY 2 */}
						<div className='m-3'>
							<a
								className='block p-8 transition bg-yellow-500 border shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-black text-center'>Category 2</h3>
							</a>
						</div>

						{/* CATEGORY 3 */}
						<div className='m-3'>
							<a
								className='block p-8 transition bg-yellow-500 border shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-black text-center'>Category 3</h3>
							</a>
						</div>

						{/* CATEGORY 4 */}
						<div className='m-3'>
							<a
								className='block p-8 transition bg-yellow-500 border shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-black text-center'>Category 4</h3>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
