import { Box, Container, Typography } from '@mui/material'

import PetCard from '../components/PetCard'
import { pets } from '../data/pets'

function PetsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
        Потерянные питомцы
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Объявления о питомцах, которых сейчас ищут или уже нашли.
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
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </Box>
    </Container>
  )
}

export default PetsPage