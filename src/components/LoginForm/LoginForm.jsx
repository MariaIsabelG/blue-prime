import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

//LEFT OFF --- Center the damn thing and add the registration part 

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className="sm:w-5/12 w-10/12 ">
      <form className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24" onSubmit={login}>
      <h3 className="text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl">Welcome back!</h3>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div className="mt-6 px-6">
          <label htmlFor="username">
            Username:
            <input
              className="border rounded-sm border-slate-400 bg-slate-100 px-1"
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div className="px-6">
          <label htmlFor="password">
            Password:
            <input
              className="border rounded-sm border-slate-400 bg-slate-100 px-1"
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <button className="border rounded-sm bg-blue-600 py-1 px-2 text-white" type="submit" name="submit" value="Log In">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
