import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";


function AgentDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const agent = useSelector(store => store.user);
    console.log('agent id', agent.id);

    const clientList = useSelector(store => store.clients.clientList);
    console.log('clientList', clientList);

    useEffect(() => {
        dispatch({type: 'GET_CLIENTS', payload: agent.id})
    }, [])

return(
    <>
        <h1>Hi {agent.first_name}!</h1>


        <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li class="w-full">
                <a onClick={() => history.push('/agent/leads')} className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Leads</a>
            </li>
            <li class="w-full">
                <a onClick={() => history.push('/agent/potentials')} className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Potential</a>
            </li>
            <li class="w-full">
                <a onClick={() => history.push('/agent/won')} className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Won</a>
            </li>
            <li class="w-full">
                <a onClick={() => history.push('/agent/lost')} className="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Lost</a>
            </li>
        </ul>

        {/* {clientList.map(client => {
            return (
                <div key={client.id}>
                    <div
                        className="block p-8 m-9 transition border border-gray-200 shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10"
                    >
                        <h5>{client.first_name} {client.last_name}</h5>
                        <h6>Matched on: {client.matched_date}</h6>
                        <p>{client.email}</p>
                        <p>{client.phone_number}</p>
                        <p>{client.state} {client.zip_code}</p>
                    </div>
                </div>
        )
        })} */}
    </>
)
}

export default AgentDashboard