import React from 'react';
import '@styles/NewPassword.scss';
import FormButton from '@components/FormButton';

import logoYardSale from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
    return (
        <div className="NewPassword">
            <div className="form-container">
                <img src={logoYardSale} alt="logo de yard sale" className="logo" />
                <h1 className="title">Create a new Password</h1>
                <p className="subtitle">Enter a new password for your account</p>
                <form action="/" className="form">
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="*********" className="input input-password" />
                    <label className="label" htmlFor="confirmPassword">
                        Re-enter password
                    </label>
                    <input id="confirmPassword" type="password" placeholder="*********" className="input input-password" />
                    <FormButton label="Confirm" classes={['confirm-password-button']} />
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
