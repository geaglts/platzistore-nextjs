import React from 'react';
import '@styles/MyAccount.scss';
import FormButton from '@components/FormButton';

const MyAccount = () => {
    return (
        <div className="MyAccount">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <p className="value">geaglts</p>
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <p className="value">geaglts@example.com</p>
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <p className="value">********</p>
                    <FormButton label="Edit" type="secondary" classes={['edit-button']} />
                </form>
            </div>
        </div>
    );
};

export default MyAccount;
