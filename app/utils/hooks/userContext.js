import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from '../axios';
import { useRouter } from 'next/router';
const Context = createContext({});

import { useSession } from 'next-auth/react';

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (router.pathname !== '/logout') {
      if (!user) {
        router.push('/');
      }
    }
  }, [user, router.pathname, loading]);

  useEffect(() => {
    setLoading(true);
    fetchUser();
  }, [session]);

  const fetchUser = async () => {
    const { data } = await axios.get('/api/me');
    console.log(data);
    setUser(data.user);
    setLoading(false);
  };

  return (
    <Context.Provider value={{ user, setUser, error, loading, fetchUser }}>
      {children}
    </Context.Provider>
  );
}

const useUserContext = () => useContext(Context);

export { UserProvider, useUserContext, Context };
