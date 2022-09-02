import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  useEffect(() =>{
    
    dispatch({ type: 'FETCH_STATES'});

  },[],);

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });

  }; // end registerUser


  return (
    <div className="max-w-screen-md px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-0">
      <form onSubmit={registerUser}>
        <h3 className="text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl w-">Register</h3>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div className="text-center font-bold sm:text-1xl p-6 lg:py-0 bg-[#d6e2ed] border rounded-b-xl  ">
          <div className="mt-6 px-6">
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
            <label>
              <input type="checkbox" value="1"/>
                Alabama
            </label>
            
              {/* <option value="2"> Alaska</option>
              <option value="3"> Arizona</option>
              <option value="4"> Arkansas</option>
              <option value="5"> California</option>
              <option value="6">Colorado </option>
              <option value="7">Connecticut</option>
              <option value="8">Delaware</option>
              <option value="9">Florida </option>
              <option value="10">Georgia </option>
              <option value="11">Hawaii </option>
              <option value="12">Idaho </option>
              <option value="13">Illinois </option>
              <option value="14">Indiana </option>
              <option value="15"> Iowa</option>
              <option value="16">Kansas </option>
              <option value="17">Kentucky </option>
              <option value="18">Louisiana </option>
              <option value="19">Maine </option>
              <option value="20">Maryland </option>
              <option value="21">Massachusetts </option>
              <option value="22">Michigan </option>
              <option value="23">Minnesota </option>
              <option value="24">Mississippi </option>
              <option value="25">Missouri </option>
              <option value="26">Montana </option>
              <option value="27">Nebraska </option>
              <option value="28">Nevada </option>
              <option value="29">New Hampshire </option>
              <option value="30">New Jersey </option>
              <option value="31">New Mexico </option>
              <option value="32">New York </option>
              <option value="33">North Carolina </option>
              <option value="34">North Dakota</option>
              <option value="35">Ohio </option>
              <option value="36">Oklahoma </option>
              <option value="37">Oregon </option>
              <option value="38">Pennsylvania </option>
              <option value="39">Rhode Island </option>
              <option value="40">South Carolina </option>
              <option value="41">South Dakota </option>
              <option value="42">Tennessee </option>
              <option value="43">Texas </option>
              <option value="44">Utah </option>
              <option value="45">Vermont </option>
              <option value="46">Virginia </option>
              <option value="47">Washington </option>
              <option value="48">West Virginia </option>
              <option value="49">Wisconsin </option>
              <option value="50">Wyoming </option> */}
        
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
