import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Favorites from './Pages/Favorites'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>
    </main>
    </div>

  )
}

export default App
