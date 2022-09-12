import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FindProForm() {
	const dispatch = useDispatch();
	const history = useHistory();

	const states = useSelector((store) => store.stateReducer);

	useEffect(() => {
		dispatch({ type: 'FETCH_STATES' });
	}, []);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [state, setState] = useState('');
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

	const basicClient = () => {
		if (
			firstName === '' ||
			lastName === '' ||
			email === '' ||
			zipCode === '' ||
			state === '' ||
			comments === ''
		) {
			alert('missing values');
		} else {
			//send client information to database
			dispatch({
				type: 'POST_CLIENT',
				payload: { firstName, lastName, phoneNumber, email, zipCode, state, comments },
			});
			//clear inputs field
			clearInputs();
			//send to confimation page
			history.push('/confirmation');
		}
	};

	const canopyClient = () => {
		if (
			firstName === '' ||
			lastName === '' ||
			email === '' ||
			zipCode === '' ||
			state === '' ||
			comments === ''
		) {
			alert('missing values');
		} else {
			//send client information to database
			dispatch({
				type: 'POST_CLIENT',
				payload: { firstName, lastName, phoneNumber, email, zipCode, state, comments },
			});
			//clear inputs field
			clearInputs();
			//change view and populate canopy
			history.push('/canopy');
		}
	};

	const fillDetails = () => {
		setFirstName('Maria Isabel');
		setLastName('Gonzalez');
		setPhoneNumber('774-772-4473');
		setEmail('mariaisabel@gmail.com');
		setState('Minnesota');
		setZipCode('55444');
		setComments('I"m looking for a better home insurance rate');
	};

	return (
			<div>
				<div className='flex items-center justify-center bg-stone-100'>
					<img src="images/blueVestLogo.png "
						className='bg-stone-100 w-32 py-10 '
						// DELETE AFTER PRESENTATION
						onClick={fillDetails}/>
				</div>
				

				<div className='p-10 lg:py-0 border bg-blue-100'>
					<div className='pt-10'>
						<p className="text-xl text-center font-bold">Enter Your Information</p>
					</div>
					<div className='lg:gap-2 items-center justify-left font-bold'>
						<div className=' flex flex-col flex-wrap  lg:flex-row lg:gap-2 items-center justify-center pt-10'>
							
							{/* FIRST NAME INPUT */}
							<div className='md:inline-flex justify-center items-center md:space-x-10 '>
								<div>
									<label className="px-1 after:content-['*'] after:ml-0.5  after:text-red-500 text-sm lg:text-lg">
										First Name
									</label>
									<div>
										<input
											required
											className='peer font-normal border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
											type='text'
											value={firstName}
											onChange={(event) => setFirstName(event.target.value)}
										/>
										<p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>
											Please enter your first name
										</p>
									</div>
								</div>

								{/* LAST NAME INPUT */}
								<div className=''>
									<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-sm lg:text-lg">
										Last Name
									</label>
									<div>
										<input
											required
											className='peer font-normal border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
											type='text'
											value={lastName}
											onChange={(event) => setLastName(event.target.value)}
										/>
										<p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>
											Please enter your last name
										</p>
									</div>
								</div>
							</div>

							{/* PHONE NUMBER INPUT */}
							<div className='md:inline-flex justify-center items-center md:space-x-10'>
								<div className=''>
									<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-sm lg:text-lg">
										Phone Number
									</label>
									<div>
										<input
											required
											className='peer font-normal border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
											type='text'
											value={phoneNumber}
											onChange={(event) => setPhoneNumber(event.target.value)}
										/>
										<p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>
											Please enter a valid phone number
										</p>
									</div>
								</div>

								{/* EMAIL INPUT */}
								<div className=''>
									<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-sm lg:text-lg">
										E-mail
									</label>
									<div>
										<input
											required
											className='peer font-normal border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
											type='email'
											value={email}
											onChange={(event) => setEmail(event.target.value)}
										/>
										<p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>
											Please enter a valid email address
										</p>
									</div>
								</div>
							</div>

							<div className='md:inline-flex justify-center items-center md:space-x-12'>
								{/* ZIP CODE INPUT */}
								<div className=''>
									<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-sm lg:text-lg">
										Zip Code
									</label>
									<div>
										<input
											required
											className='peer font-normal border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
											type='text'
											value={zipCode}
											onChange={(event) => setZipCode(event.target.value)}
										/>
										<p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>
											Please enter your zip code
										</p>
									</div>
								</div>

								{/* STATE INPUT */}
								<div className=''>
									<label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-sm lg:text-lg">
										State
									</label>
									<div>
										<select
											required
											className='peer font-normal border rounded-sm  hover:bg-white border-slate-400 bg-slate-100 px-6 shadow-sm pb-1 pt-1 mt-1'
											type='text'
											value={state}
											onChange={(event) => setState(event.target.value)}>
											{states.map((residence) => {
												return (
													<option key={residence.id} value={residence.name}>
														{residence.name}
													</option>
												);
											})}
										</select>
										<p className='invisible peer-invalid:visible text-red-700 font-thin text-xs lg:text-lg'>
											Please select a state
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* COMMENTS INPUT */}
						<div className='flex flex-row md:gap-2 items-center justify-center pt-10'>
							<div className='justify-center'>
								<label className="px-1 after:content-['*'] after:ml-0.5  after:text-red-500 text-sm lg:text-lg">
									I am looking for...
								</label>
								<div>
									<textarea
										rows='4'
										className='font-normal lg:w-96 w-48 border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
										type='text'
										value={comments}
										onChange={(event) => setComments(event.target.value)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='mb-10 text-center pt-14'>
						<button
							className='w-60 h-18 py-1 px-2 mb-5 border border-transparent rounded-md shadow-sm text-md font-bold text-white bg-blue-600 hover:bg-blue-700'
							onClick={canopyClient}>
							Submit + Import Insurance via Canopy 
						</button>

						<div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
							<p className='text-center font-semibold mx-4'>Or</p>
						</div>
						<button
							className='w-60 h-18 py-1 px-2 mt-5 border border-transparent rounded-md shadow-sm text-md font-bold text-white bg-blue-600 hover:bg-blue-700'
							onClick={basicClient}>
							Submit + Request To Be Contacted
						</button>
					</div>
				</div>
			
		</div>
	);
}

export default FindProForm;
