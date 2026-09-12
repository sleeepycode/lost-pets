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
        px: {
          xs: 2,
          sm: 3,
        },

        '@media print': {
          maxWidth: '100%',
          p: 0,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
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
            xs: 2.5,
            sm: 4,
            md: 6,
          },

          textAlign: 'center',
          overflow: 'hidden',

          '@media print': {
            boxShadow: 'none',
            p: 4,
          },
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: 800,
            textTransform: 'uppercase',
            mb: {
              xs: 2,
              md: 3,
            },

            fontSize: {
              xs: '2.5rem',
              sm: '3.4rem',
              md: '4rem',
            },

            lineHeight: 1.05,

            overflowWrap: 'break-word',

            '@media print': {
              fontSize: '4rem',
            },
          }}
        >
          {flyerTitle}
        </Typography>

        <Divider
          sx={{
            mb: {
              xs: 3,
              md: 4,
            },
          }}
        />

        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 1,

            fontSize: {
              xs: '2.25rem',
              sm: '2.75rem',
              md: '3rem',
            },
          }}
        >
          {pet.name}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: {
              xs: 3,
              md: 4,
            },

            fontSize: {
              xs: '1.25rem',
              md: '1.5rem',
            },
          }}
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
          <Typography
            sx={{
              mb: 2,
              fontSize: {
                xs: '1rem',
                sm: '1.15rem',
                md: '1.25rem',
              },
              overflowWrap: 'break-word',
            }}
          >
            <strong>Место пропажи:</strong> {pet.location}
          </Typography>

          <Typography
            sx={{
              mb: 2,
              fontSize: {
                xs: '1rem',
                sm: '1.15rem',
                md: '1.25rem',
              },
            }}
          >
            <strong>Дата пропажи:</strong> {pet.lostDate}
          </Typography>

          <Typography
            sx={{
              mb: 3,
              fontSize: {
                xs: '1rem',
                sm: '1.15rem',
                md: '1.25rem',
              },
              overflowWrap: 'break-word',
            }}
          >
            <strong>Контакт:</strong> {pet.contact}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography
            sx={{
              mb: 1,
              fontSize: {
                xs: '1.3rem',
                md: '1.5rem',
              },
            }}
          >
            Приметы
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.15rem',
              },
              lineHeight: 1.7,
              overflowWrap: 'break-word',
            }}
          >
            {pet.description}
          </Typography>
        </Box>

        <Divider
          sx={{
            my: {
              xs: 3,
              md: 4,
            },
          }}
        />

        {pet.status === 'SEARCHING' && (
          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: 1.4,

              fontSize: {
                xs: '1.15rem',
                sm: '1.3rem',
                md: '1.5rem',
              },

              overflowWrap: 'break-word',
            }}
          >
            Если вы видели этого питомца, пожалуйста, свяжитесь с владельцем:{' '}
            {pet.contact}
          </Typography>
        )}

        {pet.status === 'FOUND' && (
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '1.2rem',
                md: '1.5rem',
              },
            }}
          >
            Питомец уже найден.
          </Typography>
        )}

        {pet.status === 'CLOSED' && (
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: '1.2rem',
                md: '1.5rem',
              },
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