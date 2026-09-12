import { useState } from 'react'
import type { MouseEvent } from 'react'

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'

import PetsIcon from '@mui/icons-material/Pets'
import MenuIcon from '@mui/icons-material/Menu'

import { Link, Outlet } from 'react-router-dom'

function Layout() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)

  function handleMenuOpen(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleMenuClose() {
    setAnchorEl(null)
  }

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
                mr: {
                  xs: 0,
                  md: 4,
                },
                flexGrow: {
                  xs: 1,
                  md: 0,
                },
                whiteSpace: 'nowrap',
              }}
            >
              Lost Pets
            </Typography>

            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                gap: 1,
                flexGrow: 1,
              }}
            >
              <Button
                color="inherit"
                component={Link}
                to="/"
              >
                Главная
              </Button>

              <Button
                color="inherit"
                component={Link}
                to="/pets"
              >
                Объявления
              </Button>

              <Button
                color="inherit"
                component={Link}
                to="/pets/create"
              >
                Создать объявление
              </Button>
            </Box>

            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                display: {
                  xs: 'none',
                  md: 'inline-flex',
                },
              }}
            >
              Войти
            </Button>

            <IconButton
              color="inherit"
              onClick={handleMenuOpen}
              aria-label="Открыть меню"
              sx={{
                display: {
                  xs: 'inline-flex',
                  md: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem
                component={Link}
                to="/"
                onClick={handleMenuClose}
              >
                Главная
              </MenuItem>

              <MenuItem
                component={Link}
                to="/pets"
                onClick={handleMenuClose}
              >
                Объявления
              </MenuItem>

              <MenuItem
                component={Link}
                to="/pets/create"
                onClick={handleMenuClose}
              >
                Создать объявление
              </MenuItem>

              <MenuItem
                component={Link}
                to="/login"
                onClick={handleMenuClose}
              >
                Войти
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="main"
        sx={{
          py: {
            xs: 3,
            md: 4,
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default Layout