import { useSelector } from "react-redux";

function ClientInfo() {

    const client = useSelector(store => store.clients.thisClient);
    console.log(client);

    return(
        <div>
            <h4>{client[0].first_name} {client[0].last_name}</h4>

            <h6>Matched on: {client[0].matched_date}</h6>
            <p>{client[0].email}</p>
            <p>{client[0].phone_number}</p>
            <p>{client[0].state} {client.zip_code}</p>
            <p>STATUS {client[0].status}</p>
        </div>
    )
}

export default ClientInfo;