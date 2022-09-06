import React from 'react';

function AboutPage() {
	return (
		<div className='w-screen '>
			<div>
				<h2 className='text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 '>
					Why work with us?
				</h2>
			<div className='bg-[#d6e2ed]'>
				<article className='space-y-4 text-black px-12'>
					<p className='font-bold mt-5 lg:mt-5'>We only work with the best</p>
					<p className=''>All financial professionals on our platform go through a rigorous vetting process. Insurance Professionals are able to provide more than 95% of the products in the market, and our investment professionals are all fiduciaries, meaning they're legally bound to act in your best interest. We partner with both local and nationwide firms.</p>
					<p className='font-bold mt-5 lg:mt-5'>We are here for you</p>
					<p>We provide a convenient, and easy way to find financial professionals in your area. Equipping you with the information and resources to decide which professional is right for your financial situation.</p>
					<p className='font-bold mt-5 lg:mt-5'>No Hidden Fees. No Obligations</p>
					<p>Our services are 100% free and it only takes a few minutes to get started. No worries - you are not obligated to work with any of the financial professionals you get matched with.</p>
					<button
						type='button'
						className='border-2 rounded-xl bg-blue-600 text-white hover:shadow-lg w-32 h-12'>
						Find my Pro!
					</button>
				</article>
			</div>	
			</div>
			<div className='pb-12 pt-10 bg-stone-100'>
				<h2 className='text-center text-3xl text-black font-bold sm:text-1xl mb-6 '>
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
			<div className='text-center bg-stone-100'>
				<p>Icons by <a href="https://icons8.com">Icons8</a></p>
			</div>
		</div>
	);
}

export default AboutPage;
