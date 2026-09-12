import { Container, Typography } from '@mui/material'

function PetsPage() {
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Потерянные питомцы
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Здесь будет отображаться список объявлений.
      </Typography>
    </Container>
  )
}

export default PetsPage