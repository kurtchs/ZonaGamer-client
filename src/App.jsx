import { useState } from 'react'
import './App.css'
import GamesListPage from './pages/GamesListPage'
import { Link, Route, Router, Routes } from 'react-router-dom'
import TopPages from './pages/TopPages'
import GameDetail from './pages/GameDetail'
import AddComments from './pages/AddComments'


function App() {
  
  return (
    <>
    <nav>
      <Link to="/games" style={{border:"solid grey", borderRadius:7, fontSize:20 }} >All Games</Link>
      <br />
      
    </nav>
    
      <Routes>
       <Route path="/games" element={<GamesListPage />} />

       <Route path ="/" element={ <TopPages/>} />
       <Route path ="/games/:gameid" element={ <GameDetail/>} />
       
       <Route path="/commentaries/:gameid" element={<AddComments/>} />



      </Routes>
      
      
    </>
  )
}

export default App
