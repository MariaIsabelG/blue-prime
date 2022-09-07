import React from 'react';
import { useHistory } from 'react-router-dom';

function AboutPage() {

	const history = useHistory();
	
	return (
		<div className='w-screen '>
			<div className='bg-stone-100 pt-6'>
				<h2 className='text-3xl text-black text-center font-bold sm:text-1xl p-6'>
					Why work with us?
				</h2>
			<div>
				<article className='space-y-4 text-black  pb-10 px-16 sm:px-20 md:px-28 lg:px-32'>
					<p className='text-2xl mt-5 lg:mt-5'>We only work with the best</p>
					<p className=''>All financial professionals on our platform go through a rigorous vetting process. Insurance Professionals are able to provide more than 95% of the products in the market, and our investment professionals are all fiduciaries, meaning they're legally bound to act in your best interest. We partner with both local and nationwide firms.</p>
					<p className='text-2xl mt-5 lg:mt-5'>We are here for you</p>
					<p>We provide a convenient, and easy way to find financial professionals in your area. Equipping you with the information and resources to decide which professional is right for your financial situation.</p>
					<p className='text-2xl mt-5 lg:mt-5'>No Hidden Fees. No Obligations</p>
					<p>Our services are 100% free and it only takes a few minutes to get started. No worries - you are not obligated to work with any of the financial professionals you get matched with.</p>
					<div className='flex items-center justify-center pt-2 '>
					<button
						type='button'
						onClick={() => history.push('/findPro')}
						className='border-2 rounded-lg bg-green-500 text-white font-bold hover:shadow-lg hover:bg-green-700 w-52 h-16 text-2xl'>
						Find my Pro!
					</button>
					</div>
				</article>
			</div>	
			</div>
			<div className='pb-12 pt-10 bg-white'>
				<h2 className='text-center text-3xl text-black font-bold sm:text-1xl mb-6 '>
					Our Process
				</h2>
				<div className="border rounded-md mx-4 lg:mx-32 mb-4 pb-4 bg-orange-200 border-2 border-gray-400">
					<div className='mb-4 mt-4 flex items-center justify-center'>
						<img src="images/formicon.png" className='font-bold text-2xl text-white w-16 ml-6 mr-6 '/>
					</div>
					<div className='inline-block px-6 text-xl flex items-center justify-center'>
						<p >
							You complete our quick form and give us information about your current insurance plan
						</p>
					</div>
				</div>
				<div className='border rounded-md mx-4 lg:mx-32 mb-4 pb-4 bg-orange-200 border-2 border-gray-400'>
					<div className='mb-4 mt-4 flex items-center justify-center'>
						<img src="images/connecticon.png" className='font-bold text-2xl text-white w-16 ml-6 mr-6 '/>
					</div>
					<div className='iinline-block px-6 text-xl flex items-center justify-center'>
						<p>We use that information to match you with the financial pros that are right for you</p>
					</div>
				</div>
				<div className='border rounded-md mx-4 lg:mx-32 mb-4 pb-4 bg-orange-200 border-2 border-gray-400'>
					<div className='mb-4 mt-4 flex items-center justify-center'>
						<img src="images/communicationicon.png" className='font-bold text-2xl text-white w-16 ml-6 mr-6 '/>	
					</div>
					<div className='inline-block px-6 text-xl flex items-center justify-center'>
						<p>
							Your agents will reach out to you within X business days with options to save you money
							and better your financial wellness
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
