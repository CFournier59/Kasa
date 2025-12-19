import Card from '../Card'

export default function Gallery({ housings }) {
   return (
      <div>
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
   )
}
