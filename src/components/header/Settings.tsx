import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useLogout } from '../../hooks/useLogout';
import { onLogout } from '../../utils/logout';
import { snackVar } from '../../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../../constants/errors';

interface SettingsProps {
  settings: string[]
}


const Settings = ({ settings }: SettingsProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { logout } = useLogout();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Configurações">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key={'logout'} onClick={async () => {
          try {
            await logout() // Faz o logout
            onLogout() // Redireciona para a página de login
            handleCloseUserMenu() // Fecha o menu
          } catch (err) {
            snackVar(UNKNOWN_ERROR_SNACK_MESSAGE) // Exibe um erro genérico
          }
        }}>
          <Typography textAlign="center">Sair</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export { Settings };
