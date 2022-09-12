import React from 'react';
import { useHistory } from 'react-router-dom';

function ResourcesPage() {

	const history = useHistory();

	return (
		<div className=''>
			<div className=''>

				<div className='flex flex-col lg:flex-row justify-evenly lg:my-20 lg:mx-20 mt-10'>
					<div
						className="block lg:w-1/4 p-4 border border-gray-100 shadow-sm rounded-xl  focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
						onClick={() => history.push('/a1')}>
						<div className='block w-full h-48 lg:h-64'>
							<img src="images/home.png" className="w-full h-full rounded-xl" />
						</div>
						<h6 className="mt-2 lg:font-xl text-md">How to shop Homeowners Insurance in 2022</h6>
					</div>

					<div
						className=" block lg:w-1/4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-slate-100 hover:ring-1 hover:ring-gray-200"
						onClick={() => history.push('/a2')}>
						<div className='block w-full h-48 lg:h-64'>
							<img src="images/insurancepolicy.png" className="w-full h-full rounded-xl" />
						</div>
						<h6 className="mt-2 lg:text-xl text-md">Auto Insurance</h6>
					</div>

					<div
						className="block lg:w-1/4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
						onClick={() => history.push('/a3')}>
						<div className='block w-full h-48 lg:h-64'>
							<img src="images/teddy.png" className="w-full h-full rounded-xl" />
						</div>
						<h6 className="mt-2 lg:text-xl text-md">Guide to Long-Term Disability Insurance</h6>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row justify-evenly lg:mx-20'>
					<div
						className="block lg:w-1/4  p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
						onClick={() => history.push('/a5')}>
						<div className='block w-full h-48 lg:h-64'>
							<img src="images/beach.png" className="w-full h-full rounded-xl" />
						</div>
						<h6 className="mt-2 lg:text-xl text-md">Types of Life Insurance</h6>
					</div>

					<div
						className="block lg:w-1/4 p-4  border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
						onClick={() => history.push('/a4')}>
						<div className='block w-full h-48 lg:h-64'>
							<img src="images/homes.png" className="w-full h-full rounded-xl " />
						</div>
						<h6 className="mt-2 lg:text-xl text-md">What does Renters Insurance cover</h6>
					</div>

				</div>


			</div>
		</div>
	);

}

export default ResourcesPage;
