import { Box, Button, FormControlLabel, FormGroup, IconButton, InputBase, Modal, Paper, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

interface ChatListAddProps {
  open: boolean; // If modal is open or not
  handleClose: () => void; // Function to close the modal
}

const ChatListAdd = ({ open, handleClose }: ChatListAddProps) => {
  const [isPrivate, setIsPrivate] = useState(true)

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
        <Stack spacing={2}>
          <Typography variant="h6" component="h2">
            Novo Chat
          </Typography>
          <FormGroup>
            <FormControlLabel
              style={{ width: 0 }}
              control={
                <Switch
                  defaultChecked
                  value={isPrivate}
                  onChange={(e) => setIsPrivate(e.target.checked)}
                />
              }
              label="Privado"
            />
          </FormGroup>
          {
            isPrivate ? (
              <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Procurar usuários" />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            ) : (
              <TextField label="Nome do chat" fullWidth />
            )}
          <Button variant="outlined" >Adicionar</Button>
        </Stack>
      </Box>
    </Modal >
  )
}

export { ChatListAdd }