import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [hidden, setHidden] = useState(true);
  const [selectedstates, setSelectedstates] = useState([]);
 
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector((store) => store.errors);
  const states = useSelector((store) => store.stateReducer);
  const agentstates = useSelector((store) => store.agentstates);

  useEffect(() =>{
    
    dispatch({ type: 'FETCH_STATES'});
    
  },[]);
  
  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {

        username: username,
        password: password,
        first_name: firstname,
        last_name: lastname,
        phone_number: phonenumber,
        email: email,
        company: company,
        agent_states: agentstates,
      },
    });

    setUsername('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setPhonenumber('');
    setEmail('');
    setCompany('');

    dispatch({type: 'CLEAR_STATES'});

  };

const handleToggle = () => {

  setHidden(!hidden); 
};

const handleStates = (state) => {

  dispatch({ type: 'ADD_STATES', payload: state });
  setSearch('');
};

const removeState = (agentstate) => {

    dispatch({ type: 'REMOVE_STATES', payload: agentstate });
};
  
const fillDetails = () => {
  setUsername('miley');
  setPassword('1234');
  setFirstname('Miley');
  setLastname('Vang');
  setPhonenumber('712-543-8899');
  setEmail('miley@gmail.com');
  setCompany('State Farm');
}


  return (
    <div className="max-w-screen-md h-full px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-0 flex items-center justify-center">
      <form className=" md:mt-20 border bg-stone-100 md:w-8/12 " onSubmit={registerUser}>
        <div className="flex items-center justify-center my-5 ">
          <img 
            src="images/blueVestLogo.png" 
            className='w-2/12'
          // REMOVE AFTER PRESENTATION
            onClick={fillDetails}
          />
        </div>
        <div className="items-center justify-center ">
          <h3 className="text-2xl text-black text-center font-bold sm:text-1xl px-6 mb-5 ">Welcome to the BlueVest team!</h3>
        </div>
        
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div className="text-left sm:text-1xl p-6 lg:py-0 bg-blue-600 border rounded-b-xl ">
        <div className="mt-6 px-6">
            <label htmlFor="firstname" className="text-stone-100">
              First Name:
              <input
                className='border rounded-sm hover:bg-white border-slate-400 bg-slate-100 text-black px-1 shadow-sm'
                type="text"
                name="firstname"
                value={firstname}
                required
                onChange={(event) => setFirstname(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="lastname" className="text-white">
              Last Name:
              <input
                className='text-black border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
                type="text"
                name="lastname"
                value={lastname}
                required
                onChange={(event) => setLastname(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="phonenumber" className="text-white">
              Phone Number:
              <input
                className='text-black border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
                type="text"
                name="phonenumber"
                value={phonenumber}
                required
                onChange={(event) => setPhonenumber(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="company" className="text-white">
              Company:
              <input
                className='text-black border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
                type="text"
                name="company"
                value={company}
                required
                onChange={(event) => setCompany(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="email" className="text-white">
              Email:
              <input
                className='text-black border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
                type="text"
                name="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="username" className="text-white">
              Username:
              <input
                className='text-black border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
                type="text"
                name="username"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>
        <div className="px-6">
          <label htmlFor="password" className="text-white">
            Password:
            <input
              className='text-black border rounded-sm hover:bg-white border-slate-400 bg-slate-100 px-1 shadow-sm'
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div  className="flex items-center justify-center absolute">
            <div className="text-white mt-5"><button type="button">Select States of Licensure</button>
              <div>
                <input type="text" value={search} placeholder='Search State' onChange={(event) => setSearch(event.target.value)} className="px-2 text-black "/>
                
                    {states.filter((state => {
                      if (search === '') {
                        return ;
                      } else if (
                        state.name.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return state.name;
                      }
                    }))
                    .map((state) => (
                      <ul>
                        <li className="bg-gray-100 hover:bg-gray-300 px-2 border text-black" type="button" onClick={() => handleStates(state)}>{state.name}</li>
                      </ul>
                    ))
                    }
                
              </div>
            </div>        
        </div>
        <div className="text-right text-white mt-5">
          <a>Selected States:</a>
          {agentstates.map((agentstate => {
            return (<div className='mt-1'>
                      <a className='rounded-l-sm px-2 text-black bg-stone-100'>{agentstate.name}</a><button className=" rounded-sm bg-stone-100" type="button" onClick={() => removeState(agentstate)}>✖️</button>
                    </div>
                    )}))
          }
        </div>
        <div className="flex items-center justify-center mt-6">
          <button 
            className="w-32 h-12 font-bold border rounded-lg bg-green-500 hover:bg-green-700 py-1 px-2 text-white text-xl my-6" 
            type="submit" 
            name="submit" 
            value="Register"
            onClick={() => history.push('/login')}
          >
            Register
          </button> 
        </div>
        </div>
      </form>
    </div>
  )
};

export default RegisterForm;
