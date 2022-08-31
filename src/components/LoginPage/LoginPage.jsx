import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="grid grid-cols-3 gap-4 place-content-around">
        <div className="col-span-2">
          <h3>Benefits of joining BlueVest!</h3>
        </div>
        <div>
          <LoginForm />
        </div>
        
        <div className="">
          <RegisterForm />
        </div>
    </div>

  );
}

export default LoginPage;
