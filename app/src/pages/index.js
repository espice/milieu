import useUser from '../../utils/hooks/useUser';
import { signIn } from 'next-auth/react';

export default function Main() {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <h2>{user.name}</h2>
      ) : (
        <button
          onClick={() => {
            signIn('google');
          }}
        >
          sign deez nuts
        </button>
      )}
    </>
  );
}
