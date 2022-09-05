import React from 'react';

function AboutPage() {
	return (
		<div className='w-screen text-center'>
			<h2 className='text-2xl text-black font-bold sm:text-1xl p-6 '>
				Our Process
			</h2>
			<div>
				<div className='flex items-center justify-center mb-4'>
					<img src="images/formicon.png" className='font-bold text-2xl text-white = border border-2 border-white  w-16'/>
				</div>
				<p>
					You complete our quick form and give us information about your current insurance plan
				</p>
			</div>
			<div>
				<div className='flex items-center justify-center mb-4'>
				<img src="images/connecticon.png" className='font-bold text-2xl text-white = border border-2 border-white  w-16'/>
				</div>
				<p>We use that information to match you with the financial pros that are right for you</p>
			</div>
			<div>
				<div className='flex items-center justify-center mb-4'>
					<h3 className='font-bold text-2xl text-white bg-green-400 mt-5 lg:mt-5 border border-2 border-white rounded-full w-12'>3</h3>
				</div>
				<p>
					Your agents will reach out to you within X business days with options to save you money
					and better your financial wellness
				</p>
			</div>
	
			<h2 className='text-2xl text-white font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl xl:mx-36'>
				Why work with us?
			</h2>
			<div className='lg:py-0 bg-[#d6e2ed] border rounded-b-xl xl:mx-36 mb-10'>
				<article className='space-y-4 text-black mb-5 px-12'>
					<p className='font-bold mt-5 lg:mt-5'>Who is BlueVest Pro?</p>
					<p className='font-bold'>What sets BlueVest Pro apart?</p>
					<button
						type='button'
						className='border-2 rounded-xl bg-blue-600 text-white hover:shadow-lg w-32 h-12'>
						Find my Pro!
					</button>
				</article>
			</div>
		</div>
	);
}

export default AboutPage;
