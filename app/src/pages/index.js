import Layout from '@/components/Layout';
import useUser from '../../utils/hooks/useUser';
import { signIn } from 'next-auth/react';
import Landing from '@/modules/landing';

export default function Main() {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <h2>{user.name}</h2>
      ) : (
        <Layout>
          <Landing />
        </Layout>
      )}
    </>
  );
}
