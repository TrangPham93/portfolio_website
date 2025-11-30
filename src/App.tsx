import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'


export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </BrowserRouter>

  )
}
