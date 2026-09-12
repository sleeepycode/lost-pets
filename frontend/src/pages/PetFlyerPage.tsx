import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link, useParams } from 'react-router-dom'

import { pets } from '../data/pets'

function PetFlyerPage() {
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

  function handlePrint() {
    window.print()
  }

  const flyerTitle =
    pet.status === 'SEARCHING'
      ? 'Пропал питомец'
      : pet.status === 'FOUND'
        ? 'Питомец найден'
        : 'Объявление закрыто'

  return (
    <Container
      maxWidth="md"
      sx={{
        '@media print': {
          maxWidth: '100%',
          p: 0,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 3,

          '@media print': {
            display: 'none',
          },
        }}
      >
        <Button
          component={Link}
          to={`/pets/${pet.id}`}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Назад
        </Button>

        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
        >
          Печать
        </Button>
      </Box>

      <Paper
        elevation={3}
        sx={{
          p: {
            xs: 3,
            md: 6,
          },
          textAlign: 'center',

          '@media print': {
            boxShadow: 'none',
            p: 4,
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 800,
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          {flyerTitle}
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          {pet.name}
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          {pet.type}
        </Typography>

        <Box
          sx={{
            textAlign: 'left',
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            <strong>Место пропажи:</strong> {pet.location}
          </Typography>

          <Typography variant="h6" sx={{ mb: 2 }}>
            <strong>Дата пропажи:</strong> {pet.lostDate}
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            <strong>Контакт:</strong> {pet.contact}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h5" sx={{ mb: 1 }}>
            Приметы
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
            }}
          >
            {pet.description}
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {pet.status === 'SEARCHING' && (
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Если вы видели этого питомца, пожалуйста, свяжитесь с владельцем:
            {' '}
            {pet.contact}
          </Typography>
        )}

        {pet.status === 'FOUND' && (
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Питомец уже найден.
          </Typography>
        )}

        {pet.status === 'CLOSED' && (
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Поиск по этому объявлению завершён.
          </Typography>
        )}
      </Paper>
    </Container>
  )
}

export default PetFlyerPage