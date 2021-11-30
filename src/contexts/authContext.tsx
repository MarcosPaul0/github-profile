import { ReactNode, useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import api from '../api';

import { useNotify } from '../hooks/useNotify';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  const { errorNotify } = useNotify();

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/login', {
        email,
        password
      });
  
      const { token, user } = response.data;
  
      localStorage.setItem('@github-profile:token', token);
  
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser(user);
  
      router.push('/search-profile');
    } catch(err: any) {
      errorNotify(err.response.data.message);
    }
  }

  function signOut() {
    setUser(null);

    localStorage.removeItem('@github-profile:token');

    router.push('/');
  }

  useEffect(() => {
    const token = localStorage.getItem('@github-profile:token');

    if(token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api.get('/profile')
        .then(resp => setUser(resp.data))
        .then(() => router.push('/search-profile'))
        .catch(err => null);
    } else {
      router.push('/');
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }} >
      { children }
    </AuthContext.Provider>
  )
}