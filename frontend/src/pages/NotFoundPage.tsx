import { Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <Container>
      <Typography variant="h2">
        404
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Страница не найдена
      </Typography>

      <Button component={Link} to="/" variant="contained">
        На главную
      </Button>
    </Container>
  )
}

export default NotFoundPage