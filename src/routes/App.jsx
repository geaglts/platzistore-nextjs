import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import '@styles/global.scss';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Layout from '@containers/Layout';
import Login from '@containers/Login';
import CreateAccount from '@containers/CreateAccount';
import EmailSend from '@containers/EmailSend';
import MyAccount from '@containers/MyAccount';
import MyOrder from '@containers/MyOrder';
import MyOrders from '@containers/MyOrders';
import NewPassword from '@containers/NewPassword';
import ShoppingCart from '@containers/ShoppingCart';

import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={CreateAccount} />
                        <Route exact path="/email-sended" component={EmailSend} />
                        <Route exact path="/my-account" component={MyAccount} />
                        <Route exact path="/my-order" component={MyOrder} /> {/* Checkout */}
                        <Route exact path="/my-orders" component={MyOrders} />
                        <Route exact path="/new-password" component={NewPassword} />
                        <Route exact path="/shopping-cart" component={ShoppingCart} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </HashRouter>
        </AppContext.Provider>
    );
};

export default App;
