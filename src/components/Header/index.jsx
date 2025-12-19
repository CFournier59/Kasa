import { Link } from 'react-router'
import logo from '../../assets/logos/logo-68.svg'

export default function Header() {
   return (
      <div>
         <img src={logo} alt="Kasa Logo" />
         <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
         </nav>
      </div>
   )
}
