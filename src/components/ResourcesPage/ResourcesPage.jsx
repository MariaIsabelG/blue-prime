import React from 'react';
import { useHistory } from 'react-router-dom';

function ResourcesPage() {

	const history = useHistory();

	return (
		<div className='container'>
			<section>
				<h1 className='text-center text-2xl'>Select a Category</h1>
				<div className='max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
					<div className='flex-col flex md:flex-row justify-space-between justify-center items-center mt-8'>
						<a
							className='block transition mb-2 mr-4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
							onClick={() => history.push('/c1')}>
							<h6 className='mt-2 font-bold'>Category One</h6>

							<p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</a>

						<a
							className='block transition mb-2 mr-4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
							onClick={() => history.push('/c2')}>
							<h6 className='mt-2 font-bold'>Category Two</h6>

							<p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</a>

						<a
							className='block transition mb-2 mr-4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
							onClick={() => history.push('/c3')}>
							<h6 className='mt-2 font-bold'>Category Three</h6>

							<p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</a>

						<a
							className='block transition mb-2 mr-4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
							onClick={() => history.push('/c4')}>
							<h6 className='mt-2 font-bold'>Category Four</h6>

							<p className='hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block'>
								Lorem ipsum dolor sit amet consectetur.
							</p>
						</a>
					</div>
				</div>
			</section>
		</div>
	);

}

export default ResourcesPage;
