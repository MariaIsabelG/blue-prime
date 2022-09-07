import { useDispatch } from 'react-redux';

function NewLeadItem({ lead }) {
	const dispatch = useDispatch();

	const leadSent = () => {
		dispatch({ type: 'LEAD_SENT', payload: lead.id });
	};
	return (
		<div className='block card w-46 mb-3 md:w-66 md:mr-5 bg-white border-2 text-neutral-focus text-neutral shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10'>
			<div className='card-body items-center text-black-500 text-center'>
				<h3>Client Info</h3>
				<ul>
					<li className='text-black-500 text-xl'>
						{lead?.client_firstname} {lead?.client_last_name}
					</li>
				</ul>
				<h3>Agent Info</h3>
				<ul>
					<li className='text-black-500 text-xl'>
						{lead?.agent_firstname} {lead?.agent_last_name}
					</li>
					<li>{lead?.agent_email}</li>
				</ul>
				<div className='card-actions justify-end'>
					<button onClick={leadSent} className='btn btn-ghost'>
						Lead Sent
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewLeadItem;
