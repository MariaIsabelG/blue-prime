import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

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
        <div className="flex items-center justify-center mt-6">
          <button className="border rounded-sm bg-blue-600 py-1 px-2 text-white mb-6" type="submit" name="submit" value="Register">Register</button> 
        </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
