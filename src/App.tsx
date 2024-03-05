import { ApolloProvider } from "@apollo/client"
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import client from "./constants/apollo-client"

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export { App }
