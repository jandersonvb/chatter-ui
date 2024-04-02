import { Button, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useGetMe } from "../../hooks/useGetMe"
import { useNavigate } from "react-router-dom"

interface AuthProps {
  submitLabel: string
  children: React.ReactNode
  error?: string
  onSubmit: (credentials: { email: string, password: string }) => Promise<void>
}

const Auth = ({ submitLabel, children, error, onSubmit }: AuthProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { data } = useGetMe()
  const navigate = useNavigate()

  // Implement navigation to home page after login 
  useEffect(() => {
    if (data) {
      navigate("/")
    }
  }
    , [data, navigate])

  return (
    <Stack
      spacing={3}
      sx={{
        //Nao aparece o scroll bar
        height: '100vh',
        maxHeight: '90vh',
        width: '100%',
        maxWidth: {
          xs: "70%", md: "30%"
        },
        margin: "0 auto",
        justifyContent: "center",
      }}>
      <TextField
        type="email"
        label="E-mail"
        variant="outlined"
        value={email}
        error={!!error}
        helperText={error}
        onChange={event => setEmail(event.target.value)}
      />
      <TextField
        type="password"
        label="Senha"
        variant="outlined"
        value={password}
        error={!!error}
        helperText={error}
        onChange={event => setPassword(event.target.value)}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack >
  )
}

export { Auth }

