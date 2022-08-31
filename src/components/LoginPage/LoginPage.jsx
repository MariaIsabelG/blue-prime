import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterPage from '../RegisterPage/RegisterPage';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <div>
        <div className="flex flex-row justify-center items-center" >
          <LoginForm />
        </div>

        {/* <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </button>
        </center> */}
      </div>
    <div>
        <RegisterPage />
    </div>
    </div>

  );
}

export default LoginPage;
