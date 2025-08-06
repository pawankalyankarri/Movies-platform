import HomePage from './components/home/HomePage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Head from './components/home/Head'
import Sidebar from './components/home/Sidebar'
import MainPage from './components/home/Mainpage'
import AddMovies from './components/sidebar/AddMovies'
import AllMovies from './components/allmovies/AllMovies'

function App() {

  return (
    <div className='apppage homepage'>
        
         <Sidebar/>   
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/addmovie' element={<AddMovies/>} />
          <Route path='/allmovies' element={<AllMovies/>}  />
        
      </Routes>

    </div>
      )
}

export default App
