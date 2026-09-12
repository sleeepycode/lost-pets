import { Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <Container>
      <Typography variant="h2" component="h1">
        Lost Pets
      </Typography>

      <Typography variant="h5" sx={{ mt: 2, mb: 3 }}>
        Сервис поиска потерянных питомцев
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/pets"
      >
        Смотреть объявления
      </Button>
    </Container>
  )
}

export default HomePage