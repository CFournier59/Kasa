import { useParams } from 'react-router'
import housings from '../../data/logements.json'
import Carousel from '../../components/Carousel'

export default function Housing() {
   const { id } = useParams()
   const housing = housings.find((h) => h.id === id)
   return (
      <main>
         <section>
            <Carousel cover={housing.cover} pictures={housing.pictures} />
         </section>
      </main>
   )
}
