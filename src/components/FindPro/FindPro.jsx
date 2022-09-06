import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FindPro() {


    const dispatch = useDispatch();
    const history = useHistory();

    const states = useSelector((store) => store.stateReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_STATES' });
    }, []);

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
        if(firstName === ""|| lastName === ""|| phoneNumber === ""||email === ""||zipCode === ""||state === ""||comments === ""){
            alert('missing values')
        } else {
        //send client information to database
        dispatch({ type: 'POST_CLIENT', payload: { firstName, lastName, phoneNumber, email, zipCode, state, comments } })
        //clear inputs field
        clearInputs();
        //change view and populate canopy
        history.push('/canopy')
        }
    }

    return (
        <div className="flex items-center justify-center h-screen w-screen">

            <div className="sm:w-5/12 w-10/12 mt-20">
                <div className="text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl">
                    ENTER INFORMATION
                </div>

                <div
                    className="lg:py-0 bg-[#D6E2ED] border rounded-b-xl">

                    <div className="md:gap-2 items-center justify-center md:pt-5">
                        <div className="flex flex-col lg:flex-row md:gap-2 items-center justify-center pt-10">
                            <div>
                                <label className="px-1 after:content-['*'] after:ml-0.5  after:text-red-500">First name</label>
                                <div className='sm:pb-2'>
                                    <input
                                        required
                                        className="peer border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm"
                                        type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                                    <p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>Please enter your first name</p>
                                </div>
                            </div>

                            <div className='sm:pb-2'>
                                <label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</label>
                                <div>
                                    <input
                                        required
                                        className="peer border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm"
                                        type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                                    <p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>Please enter your last name</p>

                                </div>
                            </div>

                            <div className='sm:pb-2'>
                                <label className="px-1">Phone Number</label>
                                <div>
                                    <input
                                        className="border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm"
                                        type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                                                                            <p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>Please enter your zip code</p>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row md:gap-2  md:pt-5 items-center justify-center">
                            <div className='sm:pb-2'>
                                <label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">E-mail</label>
                                <div>
                                    <input
                                        required
                                        className="peer border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm"
                                        type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                                    <p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>Please enter a valid email address</p>
                                </div>
                            </div>

                            <div className='sm:pb-3'>
                                <label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">Zip Code</label>
                                <div>
                                    <input
                                        required
                                        className="peer border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm"
                                        type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
                                    <p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>Please enter your zip code</p>

                                </div>
                            </div>
                            <div className='sm:pb-2'>
                                <label className="px-1 after:content-['*'] after:ml-0.5 after:text-red-500">State</label>
                                <div>

                                    <select
                                        required
                                        className="peer border rounded-sm  hover:bg-blue-200 border-slate-400 bg-slate-100 px-6 shadow-sm"
                                        type="text" value={state} onChange={(event) => setState(event.target.value)}>

                                        {states.map(residence => {
                                            return (
                                                <option key={residence.id} value={residence.name}>{residence.name}</option>
                                            )
                                        })}
                                    </select>
                                    <p className='invisible peer-invalid:visible text-red-700 font-thin text-xs'>Please enter your zip code</p>


                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row md:gap-2 items-center justify-center pt-10">
                            <div className="justify-center">
                                <label className="px-1">I am looking for...</label>
                                <div>
                                    <textarea
                                        rows="4"
                                        className="lg:w-96 sm:w-48 border rounded-sm hover:bg-blue-200 border-slate-400 bg-slate-100 px-1 shadow-sm"
                                        type="text" value={comments} onChange={(event) => setComments(event.target.value)} />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="text-xl mb-6 text-center pt-7">
                        <button
                            className="w-48 py-1 px-2 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={addClient}
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
