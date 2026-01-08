import { useParams, Navigate } from 'react-router'
import Carousel from '../../components/Carousel'
import Infos from '../../components/Infos'

export default function Housing({ housings, phoneBreakpoint }) {
   const { id } = useParams()
   const housing = housings.find((h) => h.id === id)
   if (!housing) {
      return <Navigate to="/not-found" />
   } else {
      return (
         <main>
            <section>
               <Carousel cover={housing.cover} pictures={housing.pictures} />
               <Infos housing={housing} phoneBreakpoint={phoneBreakpoint} />
            </section>
         </main>
      )
   }
}
