import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AgentDashboard() {
	const dispatch = useDispatch();
	const history = useHistory();

	const agent = useSelector((store) => store.user);
	console.log('agent id', agent.id);

	const clientList = useSelector((store) => store.clients.clientList);
	console.log('clientList', clientList);

	useEffect(() => {
		dispatch({ type: 'GET_CLIENTS', payload: agent.id });
	}, []);

	return (
		<div>
			<ul className=' text-sm font-bold text-center text-gray-800 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-500'>
				<li className='w-full'>
					<a
						onClick={() => history.push('/agent/leads')}
						className='inline-block p-4 w-full bg-blue-300 hover:text-gray-700 hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
						aria-current='page'>
						Leads
					</a>
				</li>
				<li className='w-full'>
					<a
						onClick={() => history.push('/agent/potentials')}
						className='inline-block p-4 w-full bg-blue-300 hover:text-gray-700 hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'>
						Potential
					</a>
				</li>
				<li className='w-full'>
					<a
						onClick={() => history.push('/agent/won')}
						className='inline-block p-4 w-full bg-blue-300 hover:text-gray-700 hover:bg-blue-200 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'>
						Won
					</a>
				</li>
				<li className='w-full'>
					<a
						onClick={() => history.push('/agent/lost')}
						className='inline-block p-4 w-full bg-blue-300 hover:text-gray-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'>
						Lost
					</a>
				</li>
			</ul>
		</div>
	);
}

export default AgentDashboard;
