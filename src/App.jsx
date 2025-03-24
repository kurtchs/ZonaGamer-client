import { useState } from 'react'
import './App.css'
import GamesListPage from './pages/GamesListPage'
import { Link, Route, Router, Routes } from 'react-router-dom'
import TopPages from './pages/TopPages'
import GameDetail from './pages/GameDetail'
import AddComments from './pages/AddComments'
import EditComment from './components/EditComment'
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from './components/AboutPage'


function App() {
  
  return (
    <>
    <nav>
      <Link to="/games" style={{border:"solid grey", borderRadius:7, fontSize:20 }} >All Games</Link>
      <br />
      
    </nav>
    
      <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/games" element={<GamesListPage />} />
      <Route path="/" element={<TopPages />} />
      <Route path="/games/:gameid" element={<GameDetail />} />
      <Route path="/commentaries/:gameid" element={<AddComments />} />
      <Route path="/commentaries/editcomment/:commentId" element={<EditComment />} />
      <Route path="/about" element={<AboutPage />} />
      


      </Routes>
      
      <footer style={{ marginTop: '50px', textAlign: 'center', padding: '20px', backgroundColor: 'black' }}>
      <Link 
                to="/about" 
                style={{ 
                    border: "2px solid grey", 
                    borderRadius: 7, 
                    fontSize: 20, 
                    padding: "10px 20px", 
                    textDecoration: "none", 
                    color: "white" 
                }}
            >
                About
            </Link>
        <p>© 2025 Kurt Chacón. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
