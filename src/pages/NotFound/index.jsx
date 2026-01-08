import { Link } from 'react-router'
import '../../styles/NotFound.scss'

export default function NotFound() {
   return (
      <main className="content">
         <h1 className="content__title">404</h1>
         <h2 className="content__subtitle">
            Oups! La page que vous demandez n'existe pas.
         </h2>
         <Link className="content__link" to="/">
            Retourner sur la page d’accueil
         </Link>
      </main>
   )
}
