import { Link } from 'react-router'

function Header() {
   return (
      <div>
         <Link to="/">Accueil</Link>
         <Link to="/about">A Propos</Link>
      </div>
   )
}

export default Header
