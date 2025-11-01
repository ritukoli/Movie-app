import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './Pages/Favorites'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>
    </main>

  )
}

export default App
