import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Branding } from './Branding';
import { Navigation } from './Navigation';
import { Settings } from './Settings';
import { MobileNavigation } from './mobile/MobileNavigation';
import { MobileBranding } from './mobile/MobileBranding';

const pages: string[] = [];
const settings = ['Log out'];

const Header = () => {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Branding />

          <MobileNavigation pages={pages} />
          <MobileBranding />

          <Navigation pages={pages} />

          <Settings settings={settings} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export { Header };

