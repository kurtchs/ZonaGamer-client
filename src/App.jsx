import { useState } from 'react'
import './App.css'
import GamesListPage from './pages/GamesListPage'
import { Link, Route, Router, Routes } from 'react-router-dom'
import TopPages from './pages/TopPages'


function App() {
  
  return (
    <>
    <nav>
      <Link to="/allgames">All Games</Link>
      <br />
      
    </nav>
    
      <Routes>
       <Route path="/allgames" element={<GamesListPage />} />

       <Route path ="/" element={ <TopPages/>} />
      </Routes>
      
    </>
  )
}

export default App
