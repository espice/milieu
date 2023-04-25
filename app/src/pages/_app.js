import '@/styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '../../utils/hooks/userContext';

export default function App({ Component, session, pageProps }) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
}
