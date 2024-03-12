import { Link } from "react-router-dom"
import { Link as MUILink } from "@mui/material"
import { Auth } from "./Auth"
import { useLogin } from "../../hooks/useLogin"

export const Login = () => {
  const { login, error } = useLogin()

  const onSubmit = async (email: string, password: string) => {
    await login({ email, password })
  }


  return (
    <Auth submitLabel="Entrar" onSubmit={onSubmit}
    >
      <Link to={"/signup"} style={{ alignSelf: "center" }}>
        <MUILink style={{ alignSelf: "center" }}>Criar nova conta</MUILink>
      </Link>
    </Auth>
  )
}