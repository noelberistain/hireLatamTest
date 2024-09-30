import { useState } from 'react';
import { ErrorResponse, useLoginMutation } from './features/api/apiSlice';
import { Button, Input } from './components';

import openSendLogo from './assets/opensend-logo.svg';

import './App.css';

function App() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState('');

	const [login] = useLoginMutation();

	const handleLogin = async () => {
		try {
			const result = await login({ email, password }).unwrap();
			if (error) {
				setError('');
			}
			console.log('🚀 ~ handleLogin ~ response:', {
				result,
			});
		} catch (error) {
			console.log('CATCH');
			console.log(error);
			setError((error as ErrorResponse).data.message);
		}
	};
	return (
		<section
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				alignItems: 'center',
				width: '400px',
				paddingTop: '1rem',
			}}>
			<div className='logo'>
				<img src={openSendLogo} alt='opensend logo' width={16} />
				<span>opensend</span>
			</div>
			<div className='card'>
				<p>Welcome back!</p>
				<p>Log in to continue with Opensend</p>

				<Input
					placeholder='Enter email'
					type='email'
					value={email}
					handleOnChange={setEmail}
				/>

				<Input
					placeholder='Enter password'
					type='password'
					value={password}
					handleOnChange={setPassword}
				/>

				{error && <p className='error-message'>{error}</p>}

				<Button label='Forgot Your Password' onClick={() => {}} />
				<Button
					label='Log in'
					disabled={!email || !password}
					onClick={handleLogin}
				/>
			</div>
		</section>
	);
}

export default App;
