import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

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
    <div className="w-sreen h-full px-4 mx-auto sm:px-6 lg:px-8 sm:py-0 ">
      <form  onSubmit={login}>
        <div className="text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl ">
          <h3>Welcome back!</h3>
          {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
          )}
        </div>
        <div className="text-center font-bold sm:text-1xl p-6 lg:py-0 bg-[#d6e2ed] border rounded-b-xl  ">
          <div className="mt-6 px-6">
            <label htmlFor="username" >
              Username:
              <input
                className="border rounded-sm border-slate-400 bg-slate-100 px-1 hover:bg-white"
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
              className="border rounded-sm border-slate-400 bg-slate-100 px-1 hover:bg-white"
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div className="flex items-center justify-center mt-6 ">
          <button className="border rounded-sm bg-blue-600 py-1 px-2 text-white mb-6" type="submit" name="submit" value="Log In">Login</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
