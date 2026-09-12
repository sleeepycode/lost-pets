import { useState } from 'react'

import {
  Alert,
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'

interface FormData {
  name: string
  type: string
  city: string
  location: string
  lostDate: string
  description: string
  contact: string
}

function CreatePetPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: 'cat',
    city: '',
    location: '',
    lostDate: '',
    description: '',
    contact: '',
  })

  const [success, setSuccess] = useState(false)

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log('Новое объявление:', formData)

    setSuccess(true)

    setFormData({
      name: '',
      type: 'cat',
      city: '',
      location: '',
      lostDate: '',
      description: '',
      contact: '',
    })
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
        Создать объявление
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Заполните информацию о потерянном питомце.
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Объявление успешно создано.
        </Alert>
      )}

      <Paper elevation={2} sx={{ p: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            name="name"
            label="Имя питомца"
            placeholder="Например, Барсик"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            name="type"
            select
            label="Тип питомца"
            value={formData.type}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="cat">Кот / кошка</MenuItem>
            <MenuItem value="dog">Собака</MenuItem>
            <MenuItem value="bird">Птица</MenuItem>
            <MenuItem value="other">Другой питомец</MenuItem>
          </TextField>

          <TextField
            name="city"
            label="Город"
            placeholder="Например, Москва"
            value={formData.city}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            name="location"
            label="Место пропажи"
            placeholder="Улица, район или ориентир"
            value={formData.location}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            name="lostDate"
            label="Дата пропажи"
            type="date"
            value={formData.lostDate}
            onChange={handleChange}
            required
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            fullWidth
          />

          <TextField
            name="description"
            label="Описание и приметы"
            placeholder="Окрас, особенности внешности, ошейник и другая полезная информация"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            required
            fullWidth
          />

          <TextField
            name="contact"
            label="Контактная информация"
            placeholder="Телефон или другой способ связи"
            value={formData.contact}
            onChange={handleChange}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ alignSelf: 'flex-start' }}
          >
            Опубликовать объявление
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default CreatePetPage