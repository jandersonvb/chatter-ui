import { Typography } from "@mui/material";

import { Chat } from "@mui/icons-material";
import { router } from "../Routes";

const Branding = () => {
  return (
    <>
      <Chat sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => router.navigate('/')}
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          cursor: 'pointer',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            transform: 'scale(0.9)',
            transition: 'all 0.3s',

          }
        }}
      >
        CHAT
      </Typography>
    </>
  );
}

export { Branding };
