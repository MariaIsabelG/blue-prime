import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

import AgentLeads from "../AgentLeads/AgentLeads";

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
        {/* <AgentLeads /> */}
        {clientList.map(client => {
            return (
                <div key={client.id}>
                    <div>
                        <h5>{client.first_name} {client.last_name}</h5>
                        <h6>Matched on: {client.matched_date}</h6>
                        <p>{client.email}</p>
                        <p>{client.phone_number}</p>
                        <p>{client.state} {client.zip_code}</p>
                    </div>
                </div>
        )
        })}
    </>
)
}

export default AgentDashboard