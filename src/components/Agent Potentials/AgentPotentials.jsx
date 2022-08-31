import { useDispatch, useSelector } from "react-redux";
import AgentDashboard from "../AgentDashboard/AgentDashboard";

function AgentPotentials() {

    const dispatch = useDispatch();

    const clientList = useSelector(store => store.clients.clientList);

    const handleClientClick = (clientId) => {
        console.log('clientId', clientId)
        dispatch({type: 'GET_THIS_CLIENT', payload: clientId})
    };

    return(
        <>
            <AgentDashboard />
            
            {clientList.map(client => {
                if (client.status === 2) {
                    return (
                        <div key={client.id}>
                            <div
                                className="block p-8 m-9 transition border border-gray-200 shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10"
                                onClick={() => handleClientClick(client.id)}
                            >
                                <h5>{client.first_name} {client.last_name}</h5>
                                <h6>Matched on: {client.matched_date}</h6>
                                <p>{client.email}</p>
                                <p>{client.phone_number}</p>
                                <p>{client.state} {client.zip_code}</p>
                                <p>STATUS {client.status}</p>
                            </div>
                        </div>
                    )  
                }
        })}
        </>
    )
}

export default AgentPotentials;