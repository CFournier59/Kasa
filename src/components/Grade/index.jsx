import '../../styles/Grade.scss'
import filledStar from '../../assets/logos/filled-star.svg'
import emptyStar from '../../assets/logos/empty-star.svg'

export default function Grade({ rating }) {
   const totalStars = 5
   const filledStars = Math.round(rating)
   const emptyStars = totalStars - filledStars

   return (
      <div className="scale">
         {[...Array(filledStars)].map((_, index) => (
            <img
               className="scale__star"
               src={filledStar}
               key={`filled-${index}`}
            />
         ))}
         {[...Array(emptyStars)].map((_, index) => (
            <img
               className="scale__star"
               src={emptyStar}
               key={`empty-${index}`}
            />
         ))}
      </div>
   )
}
