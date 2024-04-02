import React from 'react';

import { useReactiveVar } from '@apollo/client';
import { Snackbar as MUISnackbar, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import { snackVar } from '../../constants/snack';

const SnackBar = () => {
  const snack = useReactiveVar(snackVar);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    snackVar(undefined);
  };

  return (
    <>
      {snack && (
        <Stack spacing={2} sx={{ width: "100%" }} >
          <MUISnackbar
            open={!!snack}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={snack?.type}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {snack?.message}
            </Alert>
          </MUISnackbar>
        </Stack>
      )}
    </>
  );
}

export { SnackBar };

