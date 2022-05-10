import Head from 'next/head';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <Head>
                <title>PlatziStore | La mejor tienda de Platzi</title>
            </Head>
            <Header />
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;
