import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Housing from './pages/Housing/index.jsx'
import NotFound from './pages/NotFound/index.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

async function init() {
   const response = await fetch('../public/data/logements.json')
   const text = await response.text()
   return JSON.parse(text)
}

const housings = await init()
const phoneBreakpoint = 799

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <BrowserRouter>
         <Header phoneBreakpoint={phoneBreakpoint} />
         <Routes>
            <Route path="/" element={<Home housings={housings} />} />
            <Route path="/about" element={<About />} />
            <Route
               path="/housing/:id"
               element={
                  <Housing
                     housings={housings}
                     phoneBreakpoint={phoneBreakpoint}
                  />
               }
            />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   </StrictMode>
)
