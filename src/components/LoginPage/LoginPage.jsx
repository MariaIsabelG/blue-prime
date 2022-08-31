import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="">
        <div className="">
          <h3 className="text-2xl text-white text-center font-bold sm:text-1xl p-6">Why work with us?</h3>
            <ol className="text-center">
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
