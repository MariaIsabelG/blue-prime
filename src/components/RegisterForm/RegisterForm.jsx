import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  console.log( "this is target value:", state );
  dispatch({ type: 'ADD_STATES', payload: state });
  console.log("This is selectedstate:", agentstates);
};

const removeState = (agentstate) => {

    dispatch({ type: 'REMOVE_STATES', payload: agentstate });
};
  

  return (
    <div className="max-w-screen-md h-full px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-0 flex items-center justify-center">
      <form className="mt-20 border bg-stone-100 w-8/12 " onSubmit={registerUser}>
        <div className="flex items-center justify-center my-5 ">
          <img src="images/blueVestLogo.png" className='w-2/12'/>
        </div>
        <div className="items-center justify-center ">
          <h3 className="text-2xl text-black text-center font-bold sm:text-1xl px-6 mb-5 ">Welcome to the BlueVest team!</h3>
        </div>
        
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div className="text-left font-bold sm:text-1xl p-6 lg:py-0 bg-blue-600 border rounded-b-xl ">
        <div className="mt-6 px-6">
            <label htmlFor="firstname" className="text-white">
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
            <div className="text-white mt-5"><button type="button" onClick={handleToggle}>Select States of Licensure</button>
              <div>
                <input type="text" value={search} placeholder='Search State' onChange={(event) => setSearch(event.target.value)} className="px-2 text-black"/>
                
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
                      <div className="bg-gray-100 px-2 border text-black">
                        <a type="button" onClick={() => handleStates(state)}>{state.name}</a>
                      </div>
                    ))
                    }
                
              </div>
            </div>        
        </div>
        <div className="text-right text-white mt-5">
          <a>Selected States:</a>
          {agentstates.map((agentstate => {
            return (<div>
                      <a className='px-2'>{agentstate.name}</a><button className="m-1 p-1 rounded-sm bg-stone-300 " type="button" onClick={() => removeState(agentstate)}>❌</button>
                    </div>
                    )}))
          }
        </div>
        <div className="flex items-center justify-center mt-6">
          <button className="border rounded-sm bg-blue-600 py-1 px-2 text-white mb-6" type="submit" name="submit" value="Register">Register</button> 
        </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
