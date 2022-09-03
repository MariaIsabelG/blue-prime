import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FindPro() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [state, setState] = useState('Select a State');
	const [comments, setComments] = useState('');

	const clearInputs = () => {
		setFirstName('');
		setLastName('');
		setPhoneNumber('');
		setEmail('');
		setState('');
		setZipCode('');
		setComments('');
	};

	const addClient = () => {
		//send client information to database
		dispatch({
			type: 'POST_CLIENT',
			payload: { firstName, lastName, phoneNumber, email, zipCode, state, comments },
		});
		//clear inputs field
		clearInputs();
		//change view and populate canopy
		history.push('/canopy');
	};

	return (
		<div className='flex items-center justify-center h-screen w-screen'>
			<div className='sm:w-5/12 w-10/12 '>
				<div className='text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl'>
					ENTER INFORMATION
				</div>

				<div className='lg:py-0 bg-[#D6E2ED] border rounded-b-xl'>
					<div className='md:gap-2 items-center justify-center md:pt-5'>
						<div className='flex flex-col lg:flex-row md:gap-2 items-center justify-center pt-10'>
							<div>
								<label className="px-1 after:content-['*'] after:ml-0.5  after:text-red-500">
									First name
								</label>
								<div>
									<input
										required
										className='border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm'
										type='text'
										value={firstName}
										onChange={(event) => setFirstName(event.target.value)}
									/>
								</div>
							</div>

							<div>
								<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">
									Last Name
								</label>
								<div>
									<input
										required
										className='border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm'
										type='text'
										value={lastName}
										onChange={(event) => setLastName(event.target.value)}
									/>
								</div>
							</div>

							<div>
								<label className='px-1'>Phone Number</label>
								<div>
									<input
										className='border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm'
										type='number'
										value={phoneNumber}
										onChange={(event) => setPhoneNumber(event.target.value)}
									/>
								</div>
							</div>
						</div>

						<div className='flex flex-col md:flex-row md:gap-2 items-center justify-center pt-10'>
							<div>
								<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">
									E-mail
								</label>
								<div>
									<input
										required
										className=' border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm'
										type='email'
										value={email}
										onChange={(event) => setEmail(event.target.value)}
									/>
								</div>
							</div>

							<div>
								<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">
									Zip Code
								</label>
								<div>
									<input
										required
										className='border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm'
										type='number'
										value={zipCode}
										onChange={(event) => setZipCode(event.target.value)}
									/>
								</div>
							</div>
							<div>
								<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">
									State
								</label>
								<div>
									<select
										required
										className='border rounded-sm  hover:bg-blue-200 border-slate-400 bg-slate-100 px-6 shadow-sm'
										type='text'
										value={state}
										onChange={(event) => setState(event.target.value)}>
										<option value='select'>Select a State </option>
										<option value='1'> Alabama</option>
										<option value='2'> Alaska</option>
										<option value='3'> Arizona</option>
										<option value='4'> Arkansas</option>
										<option value='5'> California</option>
										<option value='6'>Colorado </option>
										<option value='7'>Connecticut</option>
										<option value='8'>Delaware</option>
										<option value='9'>Florida </option>
										<option value='10'>Georgia </option>
										<option value='11'>Hawaii </option>
										<option value='12'>Idaho </option>
										<option value='13'>Illinois </option>
										<option value='14'>Indiana </option>
										<option value='15'> Iowa</option>
										<option value='16'>Kansas </option>
										<option value='17'>Kentucky </option>
										<option value='18'>Louisiana </option>
										<option value='19'>Maine </option>
										<option value='20'>Maryland </option>
										<option value='21'>Massachusetts </option>
										<option value='22'>Michigan </option>
										<option value='23'>Minnesota </option>
										<option value='24'>Mississippi </option>
										<option value='25'>Missouri </option>
										<option value='26'>Montana </option>
										<option value='27'>Nebraska </option>
										<option value='28'>Nevada </option>
										<option value='29'>New Hampshire </option>
										<option value='30'>New Jersey </option>
										<option value='31'>New Mexico </option>
										<option value='32'>New York </option>
										<option value='33'>North Carolina </option>
										<option value='34'>North Dakota</option>
										<option value='35'>Ohio </option>
										<option value='36'>Oklahoma </option>
										<option value='37'>Oregon </option>
										<option value='38'>Pennsylvania </option>
										<option value='39'>Rhode Island </option>
										<option value='40'>South Carolina </option>
										<option value='41'>South Dakota </option>
										<option value='42'>Tennessee </option>
										<option value='43'>Texas </option>
										<option value='44'>Utah </option>
										<option value='45'>Vermont </option>
										<option value='46'>Virginia </option>
										<option value='47'>Washington </option>
										<option value='48'>West Virginia </option>
										<option value='49'>Wisconsin </option>
										<option value='50'>Wyoming </option>
									</select>
								</div>
							</div>
						</div>
						<div className='flex flex-row md:gap-2 items-center justify-center pt-10'>
							<div className='justify-center'>
								<label className='px-1'>I am looking for...</label>
								<div>
									<textarea
										rows='4'
										className='lg:w-96 sm:w-48 border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm'
										type='text'
										value={comments}
										onChange={(event) => setComments(event.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='text-xl mb-6 text-center pt-7'>
						<button
							className='w-48 py-1 px-2 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							onClick={addClient}
							// onClick={()=>
							// <iframe src='https://app.usecanopy.com/c/bluevest-inc'
							// style={{ width: '100%', height: '750px' }}
							// frameborder='0'></iframe>}
						>
							Import Insurance
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FindPro;
