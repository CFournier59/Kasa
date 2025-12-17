import housings from '../../data/logements.json'
import Card from '../Card'

export default function Gallery() {
   return (
      <div>
         {housings.map((housing) => {
            return (
               <Card
                  key={housing.id}
                  title={housing.title}
                  src={housing.pictures[0]}
               />
            )
         })}
      </div>
   )
}
