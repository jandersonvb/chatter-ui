import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <h1>Hello, World!</h1>
      </Container>
    </ThemeProvider>
  )
}

export { App }