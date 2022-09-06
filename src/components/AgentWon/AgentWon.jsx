import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgentDashboard from "../AgentDashboard/AgentDashboard";

function AgentWon() {

    const dispatch = useDispatch();

    const clientList = useSelector(store => store.clients.clientList);
    const agentId = useSelector(store => store.user.id)

    const [newStatus, setNewStatus] = useState(3);

    const handleStatusChange = (event) => {
        setNewStatus(event.target.value)
        console.log('newStatus', newStatus)

    }

    const handleStatusUpdate = (newStatus, id) => {
        console.log('newStatus:', newStatus);
        console.log('id to update', id);
        dispatch({type: 'UPDATE_CLIENT_STATUS', payload: {newStatus, id, agentId}})
    }

    return(
        <div>
            <AgentDashboard />
            
            {clientList.map(client => {
                if (client.status === 3) {
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

                                <div className="mt-8">
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            Update Status
                                    </label>

                                    <select defaultValue={3} onChange={handleStatusChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option key={1} value="1" >Lead</option>
                                        <option key={2} value="2" >Potential</option>
                                        <option key={3} value="3" >Won</option>
                                        <option key={4} value="4" >Lost</option>
                                    </select>
                                    <button 
                                        className='mt-2 inline-block rounded-md border border-transparent bg-blue-600 py-3 px-8 text-center font-medium text-white hover:bg-blue-700'
                                        onClick={() => handleStatusUpdate(newStatus, client.client_id)}
                                            >Update</button>
                                </div>
                            </div>
                        </div>
                    )  
                }
            })}



        </div>
    )
}

export default AgentWon;