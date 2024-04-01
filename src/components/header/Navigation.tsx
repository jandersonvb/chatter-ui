import { Box, Button } from "@mui/material"
import { Page } from "../../interfaces/page.interface"
import { router } from "../Routes"

interface NavigationProps {
  pages: Page[]
}

const Navigation = ({ pages }: NavigationProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          onClick={() => router.navigate(page.path)}
          sx={{
            my: 2, color: 'white', display: 'inline', alignItems: 'center', justifyContent: 'center', textTransform: 'none', '&:hover': { color: 'primary.main' }
          }}
        >
          {page.title}
        </Button>
      ))
      }
    </Box >
  )
}

export { Navigation }