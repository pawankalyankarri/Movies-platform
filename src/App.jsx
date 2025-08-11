import HomePage from './components/home/HomePage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Head from './components/home/Head'
import Sidebar from './components/home/Sidebar'
import MainPage from './components/home/Mainpage'
import AddMovies from './components/sidebar/AddMovies'
import AllMovies from './components/allmovies/AllMovies'
import PlayMovie from './components/main/PlayMovie'
import TeluguMovies from './components/sidebar/TeluguMovies'
import HindiMovies from './components/sidebar/HindiMovies'
import EnglishMovies from './components/sidebar/EnglishMovies'
import TamilMovies from './components/sidebar/TamilMovies'
import OtherMovies from './components/sidebar/OtherMovies'
import Comedy from './components/sidebar/Comedy'
import Thriller from './components/sidebar/Thriller'
import Combination from './components/sidebar/Combination'
import Drama from './components/sidebar/Drama'
import Action from './components/sidebar/Action'

function App() {

  return (
    <div className='apppage homepage'>
        
         <Sidebar/>   
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/addmovie' element={<AddMovies/>} />
          <Route path='/allmovies' element={<AllMovies/>}  />
          <Route path='/playmovie' element = {<PlayMovie/>} />
          <Route path='/telugumovies' element={<TeluguMovies/>}/>
          <Route path="/hindim" element={<HindiMovies/>}/>
          <Route path="/englishm" element={<EnglishMovies/>}/>
          <Route path="/tamilm" element={<TamilMovies/>} />
          <Route path="/otherm" element={<OtherMovies/>}/>
          <Route path='/comedy' element={<Comedy/>}/>
          <Route path='/drama' element={<Drama/>} />
          <Route path='/action' element={<Action/>} />
          <Route path='/thriller' element={<Thriller/>} />
          <Route path='/combination' element={<Combination/>} />
        
      </Routes>

    </div>
      )
}

export default App
