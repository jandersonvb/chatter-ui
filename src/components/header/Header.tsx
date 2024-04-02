import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Branding } from './Branding';
import { Navigation } from './Navigation';
import { Settings } from './Settings';
import { MobileNavigation } from './mobile/MobileNavigation';
import { MobileBranding } from './mobile/MobileBranding';
import { useReactiveVar } from '@apollo/client';
import { authenticatedVar } from '../../constants/authenticated';
import { Page } from '../../interfaces/page.interface';

const pages: Page[] = [
  { title: 'Home', path: '/' },

]

const unauthenticatedPages: Page[] = [
  { title: 'Login', path: '/login' },
  { title: 'Cadastre-se', path: '/signup' },
]

const settings = ['Sair'];

const Header = () => {
  const authenticated = useReactiveVar(authenticatedVar)

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Branding />

          <MobileNavigation pages={authenticated ? pages : unauthenticatedPages} />
          <MobileBranding />

          <Navigation pages={authenticated ? pages : unauthenticatedPages} />

          {authenticated && <Settings settings={settings} />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export { Header };

