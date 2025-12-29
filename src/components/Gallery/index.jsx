import Card from '../Card'
import '../../styles/Gallery.scss'

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
