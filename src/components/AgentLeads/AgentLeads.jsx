import { useState } from "react";
import { useSelector } from "react-redux";
import AgentDashboard from "../AgentDashboard/AgentDashboard";


function AgentLeads() {

    const clientList = useSelector(store => store.clients.clientList);

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return(
        <>
            <AgentDashboard />

            {clientList.map(client => {
                if (client.status === 1) {
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
                                <p>STATUS {client.status}</p>
                            </div>
                        </div>
                    )  
                }
        })}
        </>
    )
}

export default AgentLeads;