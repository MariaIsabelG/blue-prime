import { useSelector } from "react-redux";

function AgentLeads() {

    const clientList = useSelector(store => store.clients);
    console.log('clientList', clientList);

    return(
        <>
        </>
    )
}

export default AgentLeads;