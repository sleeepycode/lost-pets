import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from '@mui/material'

import type { Pet } from '../types/Pet'

interface PetCardProps {
  pet: Pet
}

function PetCard({ pet }: PetCardProps) {
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
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Chip
          label={statusLabel}
          color={statusColor}
          size="small"
          sx={{ mb: 2 }}
        />

        <Typography variant="h5" component="h2">
          {pet.name}
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {pet.type}
        </Typography>

        <Typography sx={{ mb: 1 }}>
          <strong>Место:</strong> {pet.location}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <strong>Дата пропажи:</strong> {pet.lostDate}
        </Typography>

        <Typography color="text.secondary">
          {pet.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  )
}

export default PetCard