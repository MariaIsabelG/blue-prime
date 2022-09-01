import { useSelector } from "react-redux";
import AgentDashboard from "../AgentDashboard/AgentDashboard";

import { Fragment, useState } from "react";
// import {
//     Accordion,
//     AccordionHeader,
//     AccordionBody,
// } from "@material-tailwind/react";

function AgentLeads() {

    const clientList = useSelector(store => store.clients.clientList);

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    // return(
    //     <>
    //         <AgentDashboard />

    //         {clientList.map(client => {
    //             if (client.status === 1) {
    //                 return (
    //                     <div key={client.id}>
    //                         <div
    //                             className="block p-8 m-9 transition border border-gray-200 shadow-xl rounded-xl hover:shadow-blue-600/10 hover:border-blue-800/10"
    //                         >
    //                             <h5>{client.first_name} {client.last_name}</h5>
    //                             <h6>Matched on: {client.matched_date}</h6>
    //                             <p>{client.email}</p>
    //                             <p>{client.phone_number}</p>
    //                             <p>{client.state} {client.zip_code}</p>
    //                             <p>STATUS {client.status}</p>
    //                         </div>
    //                     </div>
    //                 )  
    //             }
    //     })}
    //     </>
    // )

    return(
        <>
            <AgentDashboard />

            {clientList.map(client => {
                if (client.status === 1) {
                    return (
                        <div key={client.id}>
                            <Fragment>
                                <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                                    <AccordionHeader>What is Material Tailwind?</AccordionHeader>
                                    <AccordionBody>
                                    We're not always in the position that we want to be at. We're
                                    constantly growing. We're constantly making mistakes. We're constantly
                                    trying to express ourselves and actualize our dreams.
                                    </AccordionBody>
                                </Accordion>
                            </Fragment>
                        </div>
                    )  
                }
        })}
        </>
    )
}

export default AgentLeads;