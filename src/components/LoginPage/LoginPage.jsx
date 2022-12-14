import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
	const history = useHistory();

	return (
		<section className='h-full'>
			<LoginForm />
		</section>
	);
}

export default LoginPage;
