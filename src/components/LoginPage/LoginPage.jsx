import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="w-screen h-full bg-white">
      <div className="mt-6 bg-orange-200">
        <h3 className="text-xl text-center text-black">Why work with us? </h3>
            <li className="text-center text-black">We're your strategic growth partner</li>
            <li className="text-center text-black">Financial professionals spend a bulk of their time prospecting.</li>
            <li className="text-center text-black">By working with us, you'll spend less time marketing yourself, and more time advising your clients.</li>
        <h3 className="text-xl text-center text-black">BlueVest has helped some of the biggest names in financial services grow their brand and practice.</h3>
          <img></img>
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
