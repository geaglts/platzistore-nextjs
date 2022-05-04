import React, { useRef } from 'react';
import '@styles/Login.scss';
import FormButton from '@components/FormButton';

import logoYardSale from '@logos/logo_yard_sale.svg';

const login = () => {
    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const data = { username: formData.get('email'), password: formData.get('password') };
        console.log(data);
    };

    return (
        <div className="login">
            <div className="form-container">
                <img src={logoYardSale} alt="logo de yard sale" className="logo" />
                <form action="/" className="form" ref={form}>
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input name="email" type="email" placeholder="geaglts@example.com" className="input input-email" required />
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input name="password" type="password" placeholder="*********" className="input input-password" required />
                    <FormButton label="Log In" classes={['login-button']} onClick={handleSubmit} />
                    <a href="/">Forgot my password</a>
                </form>
                <FormButton label="Sign up" type="secondary" classes={['signup-button']} />
            </div>
        </div>
    );
};

export default login;
