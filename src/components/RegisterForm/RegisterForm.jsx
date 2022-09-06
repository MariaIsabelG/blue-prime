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

  };

  const checkBoxes = (event) => {
    
    if (event.target.checked){
      dispatch({ type: 'ADD_STATES', payload: event.target.value});
    }else{
      dispatch({ type: 'REMOVE_STATES', payload: event.target.value});
    }
  }
  

  return (
    <div className="max-w-screen-md px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-0">
      <form onSubmit={registerUser}>
        <h3 className="text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl w-">Register</h3>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div className="text-left font-bold sm:text-1xl p-6 lg:py-0 bg-[#d6e2ed] border rounded-b-xl  ">
        <div className="mt-6 px-6">
            <label htmlFor="firstname">
              First Name:
              <input
                type="text"
                name="firstname"
                value={firstname}
                required
                onChange={(event) => setFirstname(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="lastname">
              Last Name:
              <input
                type="text"
                name="lastname"
                value={lastname}
                required
                onChange={(event) => setLastname(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="phonenumber">
              Phone Number:
              <input
                type="text"
                name="phonenumber"
                value={phonenumber}
                required
                onChange={(event) => setPhonenumber(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="company">
              Company:
              <input
                type="text"
                name="company"
                value={company}
                required
                onChange={(event) => setCompany(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="email">
              Email:
              <input
                type="text"
                name="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <div className="px-6">
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>
        <div className="px-6">
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          {states.map((state) => {
                return (
                        <div key={state.id} >
                          <label htmlFor="state" className='mx-1.5'>
                            <input type="checkbox" value={state.id} onChange={checkBoxes}/>
                            {state.name}
                          </label> 
                          </div>
                      )})}
                  
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
