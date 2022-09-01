import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="w-screen bg-white">
        <div className="">
          <h3 className="text-2xl text-white text-center font-bold sm:text-1xl p-6">Why work with us?</h3>
            <ol type="1" className="text-center text-white ">
              <li>We're your strategic growth partner</li>
            </ol>

        </div>
        <div>
          <LoginForm />
        </div>
        
        <div>
          <RegisterForm />
        </div>
    </div>

  );
}

export default LoginPage;
