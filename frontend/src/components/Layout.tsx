import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <PetsIcon sx={{ mr: 1 }} />

            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 700,
                mr: 4,
              }}
            >
              Lost Pets
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
              <Button color="inherit" component={Link} to="/">
                Главная
              </Button>

              <Button color="inherit" component={Link} to="/pets">
                Объявления
              </Button>

              <Button color="inherit" component={Link} to="/pets/create">
                Создать объявление
              </Button>
            </Box>

            <Button color="inherit" component={Link} to="/login">
              Войти
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ py: 4 }}>
        <Outlet />
      </Box>
    </>
  )
}

export default Layout