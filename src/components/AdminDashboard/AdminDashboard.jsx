import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AgentItem from '../AgentItem/AgentItem';
import ClientItem from '../ClientItem/ClientItem';
import NewLeadItem from '../NewLeadItem/NewLeadItem';

function AdminDashboard() {
	const [openTab, setOpenTab] = useState(1);
	const [agentSearch, setAgentSearch] = useState('');
	const [clientSearch, setClientSearch] = useState('');
	const [leadSearch, setLeadSearch] = useState('');
	const color = 'blue';
	const dispatch = useDispatch();
	const agentList = useSelector((state) => state.agentList);
	const allClients = useSelector((state) => state.allClients);
	const newLeads = useSelector((state) => state.newLeads);

	useEffect(() => {
		dispatch({ type: 'GET_AGENTS' });
		dispatch({ type: 'GET_ALL_CLIENTS' });
		dispatch({ type: 'GET_NEW_LEADS' });
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
										: 'text-' + color + '-600 bg-')
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
							<div className='mb-10 flex w-screen justify-center'>
								<label
									htmlFor='default-search'
									className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
									Search
								</label>
								<div className='relative w-2/4'>
									<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
										<svg
											aria-hidden='true'
											className='w-5 h-5 text-gray-500 dark:text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
										</svg>
									</div>
									<input
										type='search'
										id='default-search'
										className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Search...'
										value={agentSearch}
										onChange={(e) => setAgentSearch(e.target.value)}
									/>
								</div>
							</div>
							{agentList
								.filter((agent) => {
									if (agentSearch === '') {
										return agent;
									} else if (
										agent.first_name.toLowerCase().includes(agentSearch.toLowerCase()) ||
										agent.last_name.toLowerCase().includes(agentSearch.toLowerCase())
									) {
										return agent;
									}
								})
								.map((agent) => (
									<AgentItem key={agent.id} agent={agent} />
								))}
						</div>
						<div
							className={
								openTab === 2
									? 'flex flex-col h-full md:flex-wrap items-center justify-center md:flex-row'
									: 'hidden'
							}
							id='link2'>
							<div className='mb-10 flex w-screen justify-center'>
								<label
									htmlFor='default-search'
									className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
									Search
								</label>
								<div className='relative w-2/4'>
									<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
										<svg
											aria-hidden='true'
											className='w-5 h-5 text-gray-500 dark:text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
										</svg>
									</div>
									<input
										type='search'
										id='default-search'
										className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Search...'
										value={clientSearch}
										onChange={(e) => setClientSearch(e.target.value)}
									/>
								</div>
							</div>
							{allClients
								.filter((client) => {
									if (clientSearch === '') {
										return client;
									} else if (
										client.first_name.toLowerCase().includes(clientSearch.toLowerCase()) ||
										client.last_name.toLowerCase().includes(clientSearch.toLowerCase())
									) {
										return client;
									}
								})
								.map((client) => (
									<ClientItem key={client.id} client={client} />
								))}
						</div>
						<div
							className={
								openTab === 3
									? 'flex flex-col h-full md:flex-wrap items-center justify-center md:flex-row'
									: 'hidden'
							}
							id='link3'>
							<div className='mb-10 flex w-screen justify-center'>
								<label
									htmlFor='default-search'
									className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
									Search
								</label>
								<div className='relative w-2/4'>
									<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
										<svg
											aria-hidden='true'
											className='w-5 h-5 text-gray-500 dark:text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
										</svg>
									</div>
									<input
										type='search'
										id='default-search'
										className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='Search...'
										value={leadSearch}
										onChange={(e) => setLeadSearch(e.target.value)}
									/>
								</div>
							</div>
							{newLeads
								.filter((lead) => {
									if (leadSearch === '') {
										return lead;
									} else if (
										lead.client_firstname.toLowerCase().includes(leadSearch.toLowerCase()) ||
										lead.client_lastname.toLowerCase().includes(leadSearch.toLowerCase()) ||
										lead.agent_firstname.toLowerCase().includes(leadSearch.toLowerCase()) ||
										lead.agent_lastname.toLowerCase().includes(leadSearch.toLowerCase())
									) {
										return lead;
									}
								})
								.map((lead) => (
									<NewLeadItem key={lead.id} lead={lead} />
								))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminDashboard;
