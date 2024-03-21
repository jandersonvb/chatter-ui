import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"

interface AuthProps {
  submitLabel: string
  children: React.ReactNode
  error?: string
  onSubmit: (credentials: { email: string, password: string }) => Promise<void>
}

export const Auth = ({ submitLabel, children, error, onSubmit }: AuthProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Stack spacing={3} sx={{ height: "100vh", maxWidth: { xs: "70%", md: "30%" }, margin: "0 auto", justifyContent: "center" }}>
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
    </Stack>
  )
}

