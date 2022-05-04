import React from 'react';
import '@styles/CreateAccount.scss';

import FormButton from '@components/FormButton';

const CreateAccount = () => {
    return (
        <div className="createAccount">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <label className="label" htmlFor="name">
                        Name
                    </label>
                    <input id="name" type="text" placeholder="geaglts" className="input input-name" />
                    <label className="label" htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" placeholder="geaglts@example.com" className="input input-email" />
                    <label className="label" htmlFor="password">
                        Password
                    </label>
                    <input id="password" type="password" placeholder="*********" className="input input-password" />
                    <FormButton label="Create" classes={['create-button']} />
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
