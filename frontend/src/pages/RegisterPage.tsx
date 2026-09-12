import { useState } from 'react'

import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setError('')
    setSuccess(false)

    if (password !== confirmPassword) {
      setError('Пароли не совпадают.')
      return
    }

    console.log('Регистрация:', {
      name,
      email,
      password,
    })

    setSuccess(true)

    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
        Регистрация
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Создайте аккаунт, чтобы публиковать объявления.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Аккаунт успешно создан.
        </Alert>
      )}

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
            label="Имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            fullWidth
          />

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

          <TextField
            label="Повторите пароль"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Зарегистрироваться
          </Button>

          <Typography textAlign="center">
            Уже есть аккаунт?{' '}
            <Link to="/login">
              Войти
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default RegisterPage