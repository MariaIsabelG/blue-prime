import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import financial from '../../financial';
import savings from '../../savings';

function ResourcesPage() {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = (item) => {
		// console.log('article ID:', id);
		dispatch({ type: 'HOLD_ARTICLE', payload: item })
		history.push(`/a1/${item.id}`)
	}

	return (
		<div className='mt-10'>

			<div className='flex flex-wrap justify-center'>
				<div className='bg-gradient-to-l from-orange-200 mr-2 w-40 '></div>
				<div className='text-2xl pt-0 pb-0'>Finance</div>
				<div className='bg-gradient-to-r from-orange-200 ml-2 w-40'></div>
			</div>

			<div>
				<section className='flex flex-wrap flex-col md:flex-row justify-center gap-6'>

					{financial.map((finance, id) => {
						return (
							<div key={id} className='mt-10'>
								<div
									className='block transition mb-2 mr-4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
									onClick={() => handleClick(finance)}>
									<h6 className='mt-2 font-bold'>{finance.title}</h6>
									<img className=" h-36 w-36 md:h-48 md:w-48 lg:h-52" src={finance.image} />

								</div>
							</div>
						)
					})}
				</section >

				<div className='flex flex-wrap justify-center mt-10'>
					<div className='bg-gradient-to-l from-orange-200 mr-2 w-40 '></div>
					<div className='text-2xl pt-0 pb-0'>Finance</div>
					<div className='bg-gradient-to-r from-orange-200 ml-2 w-40'></div>
				</div>

			</div>
			<div className=' mt-10 md:'>
				<section className='flex flex-wrap flex-col md:flex-row justify-center gap-6 mt-10'>
					{savings.map((save, id) => {
						return (
							<div key={id} className=''>
								<div
									className='block transition mb-2 mr-4 p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200'
									onClick={() => handleClick(save)}>
									<h6 className='mt-2 font-bold'>{save.title}</h6>
									<img className=" h-36 w-36 md:h-48 md:w-48 lg:h-52 " src={save.image} />

								</div>
							</div>
						)
					})}

				</section>
			</div>
		</div >
	);

}

export default ResourcesPage;
