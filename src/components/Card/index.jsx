import { Link } from 'react-router'
import '../../styles/Card.scss'
/**
 * Card component
 * @param {string} housingId id of the housing
 * @param {string} src picture source path
 * @param {string} title title of the housing
 * @returns {JSX.Element} Card component
 */
export default function Card({ housingId, src, title }) {
   return (
      <div className="card">
         <Link to={`/housing/${housingId}`}>
            <img className="card__cover" src={src} alt={title} />
            <h2 className="card__title">{title}</h2>
         </Link>
      </div>
   )
}
