import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function AdminDashboard() {
	const [openTab, setOpenTab] = useState(1);
	const color = 'blue';
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'GET_AGENTS' });
	}, []);

	return (
		<>
			<div className='flex flex-wrap'>
				<div className='w-full'>
					<ul className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row' role='tablist'>
						<li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
							<a
								className={
									'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
									(openTab === 1
										? 'text-white bg-' + color + '-600'
										: 'text-' + color + '-600 bg-white')
								}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(1);
								}}
								data-toggle='tab'
								href='#link1'
								role='tablist'>
								Agents
							</a>
						</li>
						<li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
							<a
								className={
									'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
									(openTab === 2
										? 'text-white bg-' + color + '-600'
										: 'text-' + color + '-600 bg-white')
								}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(2);
								}}
								data-toggle='tab'
								href='#link2'
								role='tablist'>
								Clients
							</a>
						</li>
						<li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
							<a
								className={
									'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
									(openTab === 3
										? 'text-white bg-' + color + '-600'
										: 'text-' + color + '-600 bg-white')
								}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(3);
								}}
								data-toggle='tab'
								href='#link3'
								role='tablist'>
								New Leads
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='relative min-w-0 break-words w-full mb-6 shadow-lg rounded'>
				<div className='px-4 py-5'>
					<div className='h-full tab-content tab-space'>
						<div
							className={
								openTab === 1
									? 'flex flex-col h-full md:flex-wrap items-center justify-center md:flex-row'
									: 'hidden'
							}
							id='link1'>
							<div className='block card w-66 mb-3 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className={
								openTab === 2
									? 'flex flex-col h-full md:flex-wrap items-center justify-center md:flex-row'
									: 'hidden'
							}
							id='link2'>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
							<div className='block card w-66 mb-3 md:mb-0 md:w-96 md:mr-5 bg-neutral text-neutral-content'>
								<div className='card-body items-center text-center'>
									<ul>
										<li>Company Name</li>
										<li>First and Last Name</li>
										<li>Email</li>
										<li>State's of Licensure</li>
										<li># of Leads</li>
									</ul>
									<div className='card-actions justify-end'>
										<button className='btn btn-ghost'>Edit</button>
										<button className='btn btn-ghost'>Delete</button>
									</div>
								</div>
							</div>
						</div>
						<div
							className={
								openTab === 3
									? 'flex flex-col h-full md:flex-wrap items-center justify-center md:flex-row'
									: 'hidden'
							}
							id='link3'>
							<p>
								Efficiently unleash cross-media information without cross-media value. Quickly
								maximize timely deliverables for real-time schemas.
								<br />
								<br /> Dramatically maintain clicks-and-mortar solutions without functional
								solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminDashboard;
