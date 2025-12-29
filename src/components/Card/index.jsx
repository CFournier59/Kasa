import { Link } from 'react-router'
import '../../styles/Card.scss'

export default function Card({ title, src, housingId }) {
   return (
      <div className="card">
         <Link to={`/housing/${housingId}`}>
            <img className="card__cover" src={src} alt={title} />
            <h2 className="card__title">{title}</h2>
         </Link>
      </div>
   )
}
