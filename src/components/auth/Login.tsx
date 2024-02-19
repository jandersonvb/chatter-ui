import { Link } from "react-router-dom"
import { Link as MUILink } from "@mui/material"
import { Auth } from "./Auth"

export const Login = () => {
  return (
    <Auth submitLabel="Entrar" onSubmit={async () => { }}>
      <Link to={"/signup"} style={{ alignSelf: "center" }}>
        <MUILink style={{ alignSelf: "center" }}>Criar nova conta</MUILink>
      </Link>
    </Auth>
  )
}