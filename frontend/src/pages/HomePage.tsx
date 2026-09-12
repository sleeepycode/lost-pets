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
              xs: 5,
              md: 8,
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Помогаем питомцам вернуться домой
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: 750,
              mb: 4,
            }}
          >
            Просматривайте объявления о потерянных питомцах,
            публикуйте свои и помогайте распространять информацию.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              component={Link}
              to="/pets"
            >
              Смотреть объявления
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<AddIcon />}
              component={Link}
              to="/pets/create"
            >
              Создать объявление
            </Button>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: '#ffffff',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 1 }}
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