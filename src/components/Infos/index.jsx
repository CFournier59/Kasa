import TagList from '../TagList'
import Grade from '../Grade'
import DropDown from '../DropDown'

export default function Infos({ housing }) {
   return (
      <section>
         <div>
            <h1>{housing.title}</h1>
            <div>
               <p>{housing.host.name}</p>
               <img src={housing.host.picture} />
            </div>
         </div>
         <p>{housing.location}</p>
         <div>
            <TagList tags={housing.tags} />
            <Grade rating={housing.rating} />
         </div>
         <div>
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
