import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AgentItem({ agent }) {
	const [model, setModel] = useState(false);
	const [firstName, setFirstName] = useState(agent.first_name);
	const [lastName, setLastName] = useState(agent.last_name);
	const [company, setCompany] = useState(agent.company);
	const [phoneNumber, setPhoneNumber] = useState(agent.phone_number);
	const [email, setEmail] = useState(agent.email);
	const dispatch = useDispatch();

	const openModel = () => {
		setModel(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModel = () => {
		setModel(false);
		document.body.style.overflow = 'unset';
	};

	const submitEdit = () => {
		dispatch({
			type: 'UPDATE_AGENT',
			payload: { firstName, lastName, company, phoneNumber, email },
		});
	};

	return (
		<div>
			<div className='block card w-46 mb-3 md:w-66 md:mr-5 bg-white border-2 text-neutral-focus text-neutral-content shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10'>
				<div className='card-body items-center text-black-500 text-center'>
					<ul>
						<li className='text-black-500 text-xl'>
							{agent?.first_name} {agent?.last_name}
						</li>
						<li>{agent?.company}</li>
						<li>{agent?.phone_number}</li>
						<li>{agent?.email}</li>
					</ul>
					<div className='card-actions justify-end'>
						<button onClick={openModel} className='btn btn-ghost'>
							Edit
						</button>
						<button className='btn btn-ghost'>Delete</button>
					</div>
				</div>
			</div>
			{/* Popup Model For editing agent */}
			{model ? (
				<div
					id='authentication-modal'
					tabIndex='-1'
					className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex'
					aria-modal='true'
					role='dialog'>
					<div className='relative p-4 w-full max-w-md h-full md:h-auto'>
						<div className='relative rounded-lg shadow bg-gray-700'>
							<button
								onClick={closeModel}
								type='button'
								className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
								data-modal-toggle='authentication-modal'>
								<svg
									aria-hidden='true'
									className='w-5 h-5'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
								<span className='sr-only'>Close modal</span>
							</button>
							<div className='py-6 px-6 lg:px-8'>
								<h3 className='mb-4 text-xl font-medium text-center text-white'>Editing</h3>
								<form className='space-y-6' action='#'>
									<div>
										<label
											htmlFor='first_name'
											className='block mb-1 text-sm font-medium text-gray-300'>
											First Name
										</label>
										<input
											onChange={(e) => setFirstName(e.target.value)}
											value={firstName}
											type='text'
											id='first_name'
											className='bg-gray-600 border border-gray-500 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder-gray-400'
											placeholder='First Name'
											required=''
										/>
									</div>
									<div>
										<label
											htmlFor='last_name'
											className='block mb-1 text-sm font-medium text-gray-300'>
											Last Name
										</label>
										<input
											onChange={(e) => setLastName(e.target.value)}
											value={lastName}
											type='text'
											id='last_name'
											placeholder='Last Name'
											className='bg-gray-600 border border-gray-500 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder-gray-400'
											required=''
										/>
									</div>
									<div>
										<label
											htmlFor='company'
											className='block mb-1 text-sm font-medium text-gray-300'>
											Company
										</label>
										<input
											onChange={(e) => setCompany(e.target.value)}
											value={company}
											type='text'
											id='company'
											placeholder='Company'
											className='bg-gray-600 border border-gray-500 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder-gray-400'
											required=''
										/>
									</div>
									<div>
										<label
											htmlFor='phone_number'
											className='block mb-1 text-sm font-medium text-gray-300'>
											Phone Number
										</label>
										<input
											onChange={(e) => setPhoneNumber(e.target.value)}
											value={phoneNumber}
											type='text'
											id='phone_number'
											placeholder='320-123-4567'
											className='bg-gray-600 border border-gray-500 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder-gray-400'
											required=''
										/>
									</div>
									<div>
										<label htmlFor='email' className='block mb-1 text-sm font-medium text-gray-300'>
											Email
										</label>
										<input
											onChange={(e) => setEmail(e.target.value)}
											value={email}
											type='text'
											id='email'
											placeholder='person@email.com'
											className='bg-gray-600 border border-gray-500 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 placeholder-gray-400'
											required=''
										/>
									</div>
									<button
										onClick={submitEdit}
										type='submit'
										className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800'>
										Submit Edit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}

export default AgentItem;
