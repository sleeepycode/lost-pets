import { Container, Typography } from '@mui/material'

function CreatePetPage() {
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Создать объявление
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Здесь будет форма создания объявления о потерянном питомце.
      </Typography>
    </Container>
  )
}

export default CreatePetPage