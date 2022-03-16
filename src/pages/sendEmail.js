import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
	return (
		<div className={styles.SendEmail}>
			<div className={styles['form-container']}>
				<Image src={logo} alt="logo" className={styles.logo} width="150" />
				<h1 className={styles.title}>Email has been sent!</h1>
				<p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles['email-image']}>
					<Image src={iconEmail} alt="email" width="50" />
				</div>
				<button className={styles['primary-button login-button']}>Login</button>
				<p className="resend">
					<span>Did not receive the email?</span>
					<Link href="/">Resend</Link>
				</p>
			</div>
		</div>
	);
};

export default SendEmail;