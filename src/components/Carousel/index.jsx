export default function Carousel({ cover, pictures }) {
   return (
      <div>
         <img src={cover} alt="Cover" />
         {pictures.map((pic, index) => (
            <img key={index} src={pic} alt={`Picture ${index + 1}`} />
         ))}
      </div>
   )
}
