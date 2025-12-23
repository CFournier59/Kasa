import { useParams } from 'react-router'
import Carousel from '../../components/Carousel'
import Infos from '../../components/Infos'

export default function Housing({ housings }) {
   const { id } = useParams()
   const housing = housings.find((h) => h.id === id)
   return (
      <main>
         <section>
            <Carousel cover={housing.cover} pictures={housing.pictures} />
            <Infos housing={housing} />
         </section>
      </main>
   )
}
