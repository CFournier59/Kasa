import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Housing from './pages/Housing/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   </StrictMode>
)
