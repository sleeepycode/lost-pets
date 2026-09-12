import { useState } from 'react'

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('Вход:', {
      email,
      password,
    })
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
        Вход
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Войдите в аккаунт, чтобы создавать и изменять объявления.
      </Typography>

      <Paper elevation={2} sx={{ p: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            label="Электронная почта"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Пароль"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Войти
          </Button>

          <Typography textAlign="center">
            Нет аккаунта?{' '}
            <Link to="/register">
              Зарегистрироваться
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default LoginPage