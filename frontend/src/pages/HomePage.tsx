import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material'

import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'

import { Link } from 'react-router-dom'

import PetCard from '../components/PetCard'
import { pets } from '../data/pets'

function HomePage() {
  const recentPets = pets.slice(0, 3)

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            py: {
              xs: 3,
              sm: 5,
              md: 8,
            },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: {
                xs: '2.5rem',
                sm: '3.25rem',
                md: '4rem',
              },
              lineHeight: {
                xs: 1.1,
                md: 1.15,
              },
              maxWidth: 1000,
            }}
          >
            Помогаем питомцам вернуться домой
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 750,
              mb: 4,
              fontSize: {
                xs: '1.1rem',
                sm: '1.25rem',
              },
              lineHeight: 1.5,
            }}
          >
            Просматривайте объявления о потерянных питомцах,
            публикуйте свои и помогайте распространять информацию.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              alignItems: {
                xs: 'stretch',
                sm: 'flex-start',
              },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              component={Link}
              to="/pets"
              sx={{
                width: {
                  xs: '100%',
                  sm: 'auto',
                },
              }}
            >
              Смотреть объявления
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<AddIcon />}
              component={Link}
              to="/pets/create"
              sx={{
                width: {
                  xs: '100%',
                  sm: 'auto',
                },
              }}
            >
              Создать объявление
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: '#ffffff',
          py: {
            xs: 4,
            md: 6,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            sx={{
              mb: 1,
              fontSize: {
                xs: '2rem',
                md: '2.125rem',
              },
              lineHeight: 1.2,
            }}
          >
            Актуальные объявления
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Последние опубликованные объявления о потерянных питомцах.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {recentPets.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
              />
            ))}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Button
              component={Link}
              to="/pets"
              variant="outlined"
              sx={{
                width: {
                  xs: '100%',
                  sm: 'auto',
                },
              }}
            >
              Все объявления
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HomePage