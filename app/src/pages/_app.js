import '@/styles/globals.css'

import { GlobalProvider } from './GlobalContext';
import Nav from '@/components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Nav/>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
