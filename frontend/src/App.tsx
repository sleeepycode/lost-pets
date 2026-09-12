import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'

import HomePage from './pages/HomePage'
import PetsPage from './pages/PetsPage'
import PetDetailsPage from './pages/PetDetailsPage'
import PetFlyerPage from './pages/PetFlyerPage'
import CreatePetPage from './pages/CreatePetPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/pets" element={<PetsPage />} />
        <Route path="/pets/create" element={<CreatePetPage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
        <Route path="/pets/:id/flyer" element={<PetFlyerPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App