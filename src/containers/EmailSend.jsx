import React from 'react';
import '@styles/EmailSend.scss';
import FormButton from '@components/FormButton';

import logoYardSale from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';

const EmailSend = () => {
    return (
        <div className="EmailSend">
            <div className="container">
                <img src={logoYardSale} alt="logo de yard sale" className="logo" />
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div className="email-image">
                    <img src={iconEmail} alt="correo de yard sale" />
                </div>
                <FormButton label="Login" classes={['login-button']} />
                <p className="resend">
                    Didn't receive the email? <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default EmailSend;
