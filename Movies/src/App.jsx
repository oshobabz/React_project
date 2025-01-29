import './css/App.css'
import Home from './Pages/Home'
import { MovieProvider } from './contexts/MovieContext'
import {Routes, Route} from 'react-router-dom'
import Favorite from './Pages/Favorite'
import NavBar from './Components/NavBar'
function App() {

  return (<MovieProvider>
    <NavBar/>
  <main className='main-content'>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/favorite' element ={<Favorite/>} />
    </Routes>
  </main>
  </MovieProvider>
  )
}

export default App