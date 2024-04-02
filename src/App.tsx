
import { ApolloProvider } from '@apollo/client';
import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Routes';
import { Guard } from './components/auth/Guard';
import { client } from './constants/apollo-client';
import { Header } from './components/header/Header';
import { SnackBar } from './components/snackbar/Snackbar';
import { ChatList } from './components/chat-list/ChatList';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Grid container>
          <Grid item md={3}>
            <ChatList />
          </Grid>
          <Grid item md={9}>
            <Container>
              <Guard>
                <RouterProvider router={router} />
              </Guard>
            </Container>
          </Grid>
        </Grid>
        <SnackBar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export { App };
