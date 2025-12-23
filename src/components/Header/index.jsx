import { Link } from 'react-router'
import { useLocation } from 'react-router'
import logo from '../../assets/logos/logo-68.svg'
import '../../styles/Header.scss'

export default function Header() {
   const location = useLocation()
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
               Accueil
            </Link>
            <Link
               className={`navbar__link ${
                  location.pathname === '/about' && 'navbar__link--actual'
               }`}
               to="/about"
            >
               A Propos
            </Link>
         </nav>
      </div>
   )
}
