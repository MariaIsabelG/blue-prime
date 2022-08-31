import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function FindPro() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [comments, setComments] = useState('');

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setState('');
        setZipCode('');
        setComments('');
    }

    const addClient = () => {
        //send client information to database
        dispatch({ type: 'POST_CLIENT', payload: { firstName, lastName, phoneNumber, email, zipCode, state, comments } })
        //clear inputs field
        clearInputs();
        //change view and populate canopy
        history.push('/canopy')
    }


    return (
        <div className="flex items-center justify-center">

            <div className="sm:w-5/12 w-10/12 ">
                <div className="text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl">
                    ENTER INFORMATION
                </div>

                <div
                    className="lg:py-0 bg-[#D6E2ED] border rounded-b-xl">

                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <div>
                            <label className="px-1">First name</label>
                            <div>
                                <input
                                    required
                                    className="border rounded-sm border-slate-400 bg-slate-100 px-1"
                                    type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                            </div>
                        </div>

                        <div>
                            <label className="px-1">Last Name</label>
                            <div>
                                <input
                                    required
                                    className="border rounded-sm border-slate-400 bg-slate-100 px-1"
                                    type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label className="px-1">Phone Number</label>
                            <div>
                                <input
                                    required
                                    className="border rounded-sm border-slate-400 bg-slate-100 px-1"
                                    type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                            </div>
                        </div>

                        <div>
                            <label className="px-1">E-mail</label>
                            <div>
                                <input
                                    required
                                    className="border rounded-sm border-slate-400 bg-slate-100 px-1"
                                    type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                        </div>

                        <div>
                            <label className="px-1">Zip Code</label>
                            <div>
                                <input
                                    required
                                    className="border rounded-sm border-slate-400 bg-slate-100 px-1"
                                    type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
                            </div>
                        </div>

                        <div>
                            <label className="px-1">State</label>
                            <div>
                                <input
                                    required
                                    className="border rounded-sm border-slate-400 bg-slate-100 px-1"
                                    type="text" value={state} onChange={(event) => setState(event.target.value)} />
                            </div>
                        </div>

                    </div>
                    <div className="justify-center">
                        <label className="px-1">I am looking for...</label>
                        <div>
                            <input
                                required
                                className="w-96 border rounded-sm border-slate-400 bg-slate-100 px-1"
                                type="text" value={comments} onChange={(event) => setComments(event.target.value)} />
                        </div>
                    </div>
                    <div className="text-xl mb-6 text-center pt-7">
                        <button
                            className=" w-48 py-1 px-2 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={addClient}
                        // onClick={()=> 
                        // <iframe src='https://app.usecanopy.com/c/bluevest-inc' 
                        // style={{ width: '100%', height: '750px' }} 
                        // frameborder='0'></iframe>}
                        >
                            Import Insurance
                        </button>
                    </div>
                </div>
            </div>








        </div>
    )
}

export default FindPro;