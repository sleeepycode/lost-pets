import { useState } from 'react'

import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Typography,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import PrintIcon from '@mui/icons-material/Print'
import { Link, useParams } from 'react-router-dom'

import { pets } from '../data/pets'

function PetDetailsPage() {
  const { id } = useParams()

  const [shareMessage, setShareMessage] = useState('')
  const [shareError, setShareError] = useState(false)

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

  async function handleShare() {
    const url = window.location.href

    setShareMessage('')
    setShareError(false)

    try {
      if (navigator.share) {
        await navigator.share({
          title: `Lost Pets — ${pet.name}`,
          text: `Посмотрите объявление о питомце ${pet.name}`,
          url,
        })

        setShareMessage('Объявлением успешно поделились.')
      } else {
        await navigator.clipboard.writeText(url)

        setShareMessage('Ссылка на объявление скопирована.')
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }

      setShareError(true)
      setShareMessage('Не удалось поделиться объявлением.')
    }
  }

  return (
    <Container maxWidth="md">
      {shareMessage && (
        <Alert
          severity={shareError ? 'error' : 'success'}
          sx={{ mb: 3 }}
        >
          {shareMessage}
        </Alert>
      )}

      <Chip
        label={statusLabel}
        color={statusColor}
        sx={{ mb: 2 }}
      />

      <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
        {pet.name}
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
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

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Button
          component={Link}
          to="/pets"
          variant="outlined"
        >
          Назад к объявлениям
        </Button>

        <Button
          variant="contained"
          startIcon={<ShareIcon />}
          onClick={handleShare}
        >
          Поделиться
        </Button>

        <Button
          component={Link}
          to={`/pets/${pet.id}/flyer`}
          variant="outlined"
          startIcon={<PrintIcon />}
        >
          Листовка
        </Button>
      </Box>
    </Container>
  )
}

export default PetDetailsPage