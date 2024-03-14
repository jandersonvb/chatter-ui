import { useState } from 'react';
import client from '../constants/apollo-client';

export interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<boolean>();

  const login = async (request: LoginRequest) => {
    const response = await fetch(`http://localhost:3000/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      setError(true);
      return;
    }
    setError(false);
    await client.refetchQueries({ include: 'active' });
  };

  return { login, error };
};

export { useLogin };
