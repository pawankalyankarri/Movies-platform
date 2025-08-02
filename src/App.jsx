import HomePage from './components/home/HomePage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Head from './components/home/Head'
import Sidebar from './components/home/Sidebar'
import MainPage from './components/home/Mainpage'
import AddMovies from './components/sidebar/AddMovies'

function App() {

  return (
    <div className='apppage homepage'>
        
            
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/addmovie' element={<AddMovies/>} />
        {/* <Route path="/head" element={<Head />} />
        <Route path="/" element={<Sidebar />} />
        <Route path="/main" element={<MainPage />} /> */}
      </Routes>

    </div>
      )
}

export default App
