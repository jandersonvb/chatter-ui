import { ApolloProvider } from "@apollo/client"
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import client from "./constants/apollo-client"
import { RouterProvider } from "react-router-dom"
import { router } from "./components/Routes"

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
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export { App }
