// fsai_7c9e2b41_lr1

import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PetsPage from './pages/PetsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pets" element={<PetsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App