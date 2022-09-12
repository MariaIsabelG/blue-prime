import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import AgentDashboard from "../AgentDashboard/AgentDashboard";

function AgentPotentials() {

    const dispatch = useDispatch();
    const history = useHistory();

    const clientList = useSelector(store => store.clients.clientList);
    const agentId = useSelector(store => store.user.id)

    const [newStatus, setNewStatus] = useState(2);

    // const handleClientClick = (clientId) => {
    //     console.log('clientId', clientId)
    //     dispatch({type: 'GET_THIS_CLIENT', payload: clientId})
        
    //     history.push(`/client/${clientId}`)
    // };

    const handleStatusChange = (event) => {
        setNewStatus(event.target.value)
        console.log('newStatus', newStatus)

    }

    // const handleStatusUpdate = (newStatus, id) => {
    //     console.log('newStatus:', newStatus)
    //     console.log('id to update:', id);
    //     axios.put(`/api/client/${id}`, {status: newStatus})
    //     .then((response => {
    //         console.log(response);
    //     }))
    // }

    const handleStatusUpdate = (newStatus, id) => {
        console.log('newStatus:', newStatus);
        console.log('id to update', id);
        dispatch({type: 'UPDATE_CLIENT_STATUS', payload: {newStatus, id, agentId}})
    }

    return(
        <>
            <AgentDashboard />
            <section >
                <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-stone-100'>
                    <div className='flex-col flex-wrap flex md:flex-row justify-space-between justify-center items-center mt-8'>

                        {clientList.map(client => {
                            if (client.status === 2) {
                                return (
                                    <div key={client.id}>
                                        <div 
                                            className="w-64 md:w-80 h-auto md:h-96 p-8 m-9 bg-white transition border border-gray-200 shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10"
                                            // onClick={() => handleClientClick(client.id)}
                                        >
                                            <h5 className="mb-4 text-xl text-center font-bold">{client.first_name} {client.last_name}</h5>

                                            <h6>Matched on: {client.matched_date}</h6>
                                            <p>{client.email}</p>
                                            <p>{client.phone_number}</p>
                                            <p>{client.state} {client.zip_code}</p>
                                            <p className="w-full">{client.comments}</p>

                                            <div className="mt-6">
                                                <label for="status" class="block text-sm font-medium text-gray-900 dark:text-gray-400">
                                                    Update Status
                                                </label>

                                                <div className="inline-block justify-center items-center">

                                                <select defaultValue={2} onChange={handleStatusChange} id="status" 
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                        <option key={1} value="1" >Lead</option>
                                                        <option key={2} value="2" >Potential</option>
                                                        <option key={3} value="3" >Won</option>
                                                        <option key={4} value="4" >Lost</option>
                                                </select>
                                                <button 
                                                    className='mt-2 ml-4 rounded-md border border-transparent bg-blue-600 py-2 px-3 text-center font-medium text-white hover:bg-blue-700'
                                                    onClick={() => handleStatusUpdate(newStatus, client.id)}>
                                                    Update
                                                </button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>

                                )  
                            }
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AgentPotentials;