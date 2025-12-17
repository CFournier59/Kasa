export default function Card({ title, src }) {
   return (
      <div>
         <img src={src} alt={title} />
         <h2>{title}</h2>
      </div>
   )
}
