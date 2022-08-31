import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

function AgentDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const agent = useSelector(store => store.user);
    console.log('agent id', agent.id);

    const clientList = useSelector(store => store.clients);
    console.log('clientList', clientList);

    useEffect(() => {
        dispatch({type: 'GET_CLIENTS', payload: agent.id})
    }, [])

return(
    <>
        
    </>
)
}

export default AgentDashboard