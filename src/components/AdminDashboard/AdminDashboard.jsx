import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AgentItem from '../AgentItem/AgentItem';
import ClientItem from '../ClientItem/ClientItem';
import NewLeadItem from '../NewLeadItem/NewLeadItem';

function AdminDashboard() {
	const [openTab, setOpenTab] = useState(1);
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
							{agentList.map((agent) => (
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
							{allClients.map((client) => (
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
							{newLeads.map((lead) => (
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
