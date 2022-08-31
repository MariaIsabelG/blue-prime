import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

function AgentDashboard() {

    const dispatch = useDispatch();
    const history = useHistory();

    const agentId = useSelector(store => store.user);
    console.log('agentId', agent);

    useEffect(() => {
        dispatch({type: 'GET_CLIENTS', payload: agentId})
    }, [])

return(
    <>
        
    </>
)
}

export default AgentDashboard