export default function Grade({ rating }) {
   const totalStars = 5
   const filledStars = Math.round(rating)
   const emptyStars = totalStars - filledStars

   return (
      <div>
         {[...Array(filledStars)].map((_, index) => (
            <span key={`filled-${index}`} style={{ color: 'red' }}>
               ★
            </span>
         ))}
         {[...Array(emptyStars)].map((_, index) => (
            <span key={`empty-${index}`} style={{ color: 'lightgray' }}>
               ★
            </span>
         ))}
      </div>
   )
}
