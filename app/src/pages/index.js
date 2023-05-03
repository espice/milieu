import Layout from '@/components/Layout';
import useUser from '../../utils/hooks/useUser';
import { signIn } from 'next-auth/react';
import Landing from '@/modules/landing';
import Home from '@/modules/home';

export default function Main() {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <Layout>
          <Home/>
        </Layout>
      ) : (
        <Layout>
          <Landing />
        </Layout>
      )}
    </>
  );
}
