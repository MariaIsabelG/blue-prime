import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function LoginPage() {
	const history = useHistory();  

  return (
  
        <section class="h-full">
          <LoginForm/>
        </section>
  );
}

export default LoginPage;
