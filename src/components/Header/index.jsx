import { Link, useLocation } from 'react-router'
import desktopLogo from '../../assets/logos/logo-68.svg'
import phoneLogo from '../../assets/logos/logo-46.svg'
import '../../styles/Header.scss'
import { useEffect, useState } from 'react'

export default function Header({ phoneBreakpoint }) {
   const location = useLocation()
   const [capSize, setCapSize] = useState(false)
   const [logo, setLogo] = useState(desktopLogo)
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= phoneBreakpoint) {
            setCapSize(false)
            setLogo(desktopLogo)
         } else {
            setCapSize(true)
            setLogo(phoneLogo)
         }
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   })

   return (
      <div className="header">
         <img className="header__logo" src={logo} alt="Kasa Logo" />
         <nav className="navbar">
            <Link
               className={`navbar__link ${
                  location.pathname === '/' && 'navbar__link--actual'
               }`}
               to="/"
            >
               {capSize ? 'ACCUEIL' : 'Accueil'}
            </Link>
            <Link
               className={`navbar__link ${
                  location.pathname === '/about' && 'navbar__link--actual'
               }`}
               to="/about"
            >
               {capSize ? 'À PROPOS' : 'À propos'}
            </Link>
         </nav>
      </div>
   )
}
