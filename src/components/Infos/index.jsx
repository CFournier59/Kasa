import '../../styles/Infos.scss'
import TagList from '../TagList'
import Grade from '../Grade'
import DropDown from '../DropDown'

export default function Infos({ housing }) {
   return (
      <section className="infos">
         <div className="infos__top-container">
            <div>
               <h1 className="infos__title">{housing.title}</h1>
               <p className="infos__location">{housing.location}</p>
            </div>
            <div className="infos__host">
               <p>{housing.host.name}</p>
               <img src={housing.host.picture} />
            </div>
         </div>
         <div className="infos__middle-container">
            <TagList tags={housing.tags} />
            <Grade rating={housing.rating} />
         </div>
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
