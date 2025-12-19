import { Link } from 'react-router'

export default function Card({ title, src, housingId }) {
   return (
      <Link to={`/housing/${housingId}`}>
         <img src={src} alt={title} />
         <h2>{title}</h2>
      </Link>
   )
}
