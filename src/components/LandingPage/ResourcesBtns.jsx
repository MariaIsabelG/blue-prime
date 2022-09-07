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

					<div className='flex-col flex md:flex-row justify-space-between justify-center items-center mt-8'>
						{/* CATEGORY 1*/}
						<div className='m-3 '>
							<a
								className='block p-6 transition border shadow-xl rounded-xl bg-blue-600 hover:bg-blue-400'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center '>Home</h3>
							</a>
						</div>

						{/* CATEGORY 2 */}
						<div className='m-3'>
							<a
								className='block p-6 transition border shadow-xl rounded-xl bg-blue-600 hover:bg-blue-400'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Renters</h3>
							</a>
						</div>

						{/* CATEGORY 3 */}
						<div className='m-3'>
							<a
								className='block p-6 transition border shadow-xl rounded-xl bg-blue-600 hover:bg-blue-400'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Auto</h3>
							</a>
						</div>

						{/* CATEGORY 4 */}
						<div className='m-3'>
							<a
								className='block p-6 transition border shadow-xl rounded-xl bg-blue-600 hover:bg-blue-400'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Disability</h3>
							</a>
						</div>
						{/* CATEGORY 5 */}
						<div className='m-3'>
							<a
								className='block p-6 transition border shadow-xl rounded-xl bg-blue-600 hover:bg-blue-400'
								href='/'>
								<h3 className='m-4 text-xl font-bold text-white text-center'>Life</h3>
							</a>
						</div>
					</div>
				</div>
			</section>
    )
};

export default ResourcesBtns;