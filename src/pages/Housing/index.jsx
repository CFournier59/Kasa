import { useParams, Navigate } from 'react-router'
import Carousel from '../../components/Carousel'
import Infos from '../../components/Infos'
/**
 * Housing page component
 * @param {JSON} housings - List of housing data
 * @param {number} phoneBreakpoint breakpoint to switch between desktop and mobile logos. modify at main.jsx
 * @returns {JSX.Element} Housing page component
 */
export default function Housing({ housings, phoneBreakpoint }) {
   const { id } = useParams()
   const housing = housings.find((h) => h.id === id)
   // redirects to not found page if housing not found
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
