import { useHistory } from 'react-router-dom';


function ResourcesBtns(){

    const history = useHistory();

    return(
        <section className='text-black'>
				<div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
					<div className='max-w-lg mx-auto text-center'>
						<h2 className='text-3xl font-bold sm:text-4xl'>Learn More</h2>

						<p className='mt-4 text-gray-600'>Checkout Our Free Learning Resources</p>
					</div>

					<div className='flex-col flex flex-row sm:flex-row md:flex-row justify-space-between justify-center items-center mt-8'>
						<div
							className="block lg:w-1/4 p-4 border border-gray-100 shadow-sm rounded-xl  focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 mx-5 mb-5"
							onClick={() => history.push('/a1')}>
							<div className='block w-full h-48 lg:h-64'>
								<img src="images/home.png" className="w-full h-full rounded-xl" />
							</div>
							<h6 className="mt-2 text-md text-center">How to shop Homeowners Insurance in 2022</h6>
						</div>
						<div
						className=" block lg:w-1/4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-slate-100 hover:ring-1 hover:ring-gray-200 mx-5 mb-5"
						onClick={() => history.push('/a2')}>
							<div className='block w-full h-48 lg:h-64'>
								<img src="images/insurancepolicy.png" className="w-full h-full rounded-xl" />
							</div>
							<h6 className="mt-2 text-md text-center">Auto Insurance Tips You Need To Know</h6>
						</div>

						<div
						className="block lg:w-1/4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200 mx-5 mb-5"
						onClick={() => history.push('/a3')}>
						<div className='block w-full h-48 lg:h-64'>
							<img src="images/teddy.png" className="w-full h-full rounded-xl" />
						</div>
						<h6 className="mt-2 text-md text-center">Guide to Long-Term Disability Insurance</h6>
						</div>	
					</div>
				</div>
			</section>
    )
};

export default ResourcesBtns;