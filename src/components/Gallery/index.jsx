import Card from '../Card'
import '../../styles/Gallery.scss'
/**
 * Gallery component
 * @param {JSON} housings list of housings to display
 * @returns {JSX.Element} Gallery component
 */
export default function Gallery({ housings }) {
   return (
      <div className="gallery">
         <div className="gallery__container">
            {housings.map((housing) => {
               return (
                  <Card
                     key={housing.id}
                     housingId={housing.id}
                     title={housing.title}
                     src={housing.cover}
                  />
               )
            })}
         </div>
      </div>
   )
}
