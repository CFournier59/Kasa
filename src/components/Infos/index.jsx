import '../../styles/Infos.scss'
import TagList from '../TagList'
import Grade from '../Grade'
import DropDown from '../DropDown'
import { useEffect, useState } from 'react'
/**
 * Infos component to display housing information
 * @param {object} housing the housing object from housings.JSON
 * @param {number} phoneBreakpoint breakpoint to switch between desktop and mobile logos. modify at main.jsx
 * @returns {JSX.Element} Infos component
 */
export default function Infos({ housing, phoneBreakpoint }) {
   // phoneTemplate useState is used to adapt change the structure of jsx elements depending on the screen size
   const [phoneTemplate, setPhoneTemplate] = useState(false)
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= phoneBreakpoint) {
            setPhoneTemplate(false)
         } else {
            setPhoneTemplate(true)
         }
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   })

   return (
      <section className="infos">
         <div className="infos__top-container">
            <div>
               <h1 className="infos__title">{housing.title}</h1>
               <p className="infos__location">{housing.location}</p>
            </div>
            {!phoneTemplate && (
               <div className="infos__host">
                  <p>{housing.host.name}</p>
                  <img src={housing.host.picture} />
               </div>
            )}
         </div>
         <div className="infos__middle-container">
            <TagList tags={housing.tags} />
            {!phoneTemplate && <Grade rating={housing.rating} />}
         </div>
         {phoneTemplate && (
            <div className="infos__phone-template-container">
               <Grade rating={housing.rating} />
               <div className="infos__host">
                  <p>{housing.host.name}</p>
                  <img src={housing.host.picture} />
               </div>
            </div>
         )}
         <div className="infos__bottom-container">
            <DropDown
               title="Description"
               content={<p>{housing.description}</p>}
            />
            <DropDown
               title="Équipements"
               content={
                  <ul>
                     {housing.equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                     ))}
                  </ul>
               }
            />
         </div>
      </section>
   )
}
