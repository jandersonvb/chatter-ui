import { Link } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { Auth } from './Auth';
import { useCreateUser } from '../../hooks/useCreateUser';
import { extractErrorMessage } from '../../utils/errors';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

interface SignUpProps {
  email: string;
  password: string;
}

const SignUp = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("")
  const { login } = useLogin()

  const onSubmit = async ({ email, password }: SignUpProps) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });
      await login({ email, password });
      setError("");
    } catch (err) {
      const errorMessage = extractErrorMessage(err);


      if (errorMessage === "Email must be an email") {
        setError("Email ou senha incorretos");
      } else if (errorMessage === "Password is not strong enough") {
        setError("Use letras maiúsculas e caracteres especiais");
      } else if (errorMessage === "Email already exists") {
        setError("Email já cadastrado");
      } else {
        setError("Ocorreu um erro desconhecido");
      }
    }
  };

  return (
    <Auth
      submitLabel="Cadastrar"
      error={error}
      onSubmit={onSubmit}>
      <Link to={'/login'} style={{ alignSelf: 'center' }}>
        <MUILink>Entrar</MUILink>
      </Link>
    </Auth>
  );
};

export { SignUp }