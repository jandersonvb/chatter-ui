import { AddComment } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar } from "@mui/material"

interface ChatListHeaderProps {
  handleAddChat: () => void
}

const ChatListHeader = ({ handleAddChat }: ChatListHeaderProps) => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton
          size="large"
          edge="end"
          onClick={handleAddChat}
        >
          <AddComment />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export { ChatListHeader }
