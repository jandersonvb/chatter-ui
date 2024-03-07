import { Link } from "react-router-dom"
import { Link as MUILink } from "@mui/material"
import { Auth } from "./Auth"
import { useCreateUser } from "../../hooks/useCreateUser"



export const SignUp = () => {
  const [createUser] = useCreateUser()

  const onSubmit = async (email: string, password: string) => {
    await createUser({
      variables: {
        createUserInput: {
          email,
          password
        }
      }
    })
  }

  return (
    <Auth
      submitLabel="Cadastrar"
      onSubmit={onSubmit}
    >
      <Link to={"/login"} style={{ alignSelf: "center" }}>
        <MUILink>Entrar</MUILink>
      </Link>
    </Auth>
  )
}