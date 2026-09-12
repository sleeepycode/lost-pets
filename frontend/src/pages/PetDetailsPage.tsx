import {
  Button,
  Chip,
  Container,
  Typography,
} from '@mui/material'
import { Link, useParams } from 'react-router-dom'

import { pets } from '../data/pets'

function PetDetailsPage() {
  const { id } = useParams()

  const pet = pets.find((pet) => pet.id === Number(id))

  if (!pet) {
    return (
      <Container>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Объявление не найдено
        </Typography>

        <Button component={Link} to="/pets" variant="contained">
          Вернуться к объявлениям
        </Button>
      </Container>
    )
  }

  const statusLabel =
    pet.status === 'SEARCHING'
      ? 'Ищем'
      : pet.status === 'FOUND'
        ? 'Найден'
        : 'Закрыто'

  const statusColor =
    pet.status === 'SEARCHING'
      ? 'warning'
      : pet.status === 'FOUND'
        ? 'success'
        : 'default'

  return (
    <Container maxWidth="md">
      <Chip
        label={statusLabel}
        color={statusColor}
        sx={{ mb: 2 }}
      />

      <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
        {pet.name}
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        {pet.type}
      </Typography>

      <Typography sx={{ mb: 2 }}>
        <strong>Место пропажи:</strong> {pet.location}
      </Typography>

      <Typography sx={{ mb: 2 }}>
        <strong>Дата пропажи:</strong> {pet.lostDate}
      </Typography>

      <Typography sx={{ mb: 4 }}>
        {pet.description}
      </Typography>

      <Button component={Link} to="/pets" variant="outlined">
        Назад к объявлениям
      </Button>
    </Container>
  )
}

export default PetDetailsPage