import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import styles from '@styles/Login.module.scss';

const Login = () => {

	const form = useRef(null);

	const handleSubmit = () => {
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
	};

	return (
		<div className={styles.Login}>
			<div className={styles['Login-container']}>
				<Image src={logo} alt="logo" className={styles.logo} width="100" height="100"/>
				<form action="/" className={styles.form} ref={form}>
					<label htmlFor="email" className={styles.label}>Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className={styles['input', 'input-email']} />
					<label htmlFor="password" className={styles.label}>Password</label>
					<input type="password" name="password" placeholder="*********" className={styles['input', 'input-password']} />
					<input type='button' value="Log in" className={styles['primary-button', 'login-button']} onClick={handleSubmit} />
					<Link href="/passwordRecovery">Forgot my password</Link>
				</form>
				<button className={[styles['secondary-button'] ,styles['signup-button']]}>Sign up</button>
			</div>
		</div>
	);
};

export default Login; 