import { useState } from 'react'

export default function Carousel({ cover, pictures }) {
   const [currentSrc, setSrc] = useState(cover)
   function handlePrevClick() {
      const currentIndex = pictures.indexOf(currentSrc)
      const prevIndex =
         currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
      setSrc(pictures[prevIndex])
   }
   function handleNextClick() {
      const currentIndex = pictures.indexOf(currentSrc)
      const nextIndex =
         currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
      setSrc(pictures[nextIndex])
   }
   return (
      <div>
         <div>
            <figure>
               <img src={currentSrc} alt="housing" />
               <figcaption>{`${pictures.indexOf(currentSrc) + 1} / ${
                  pictures.length
               }`}</figcaption>
            </figure>
         </div>
         <button onClick={handlePrevClick}>previous</button>
         <button onClick={handleNextClick}>next</button>
      </div>
   )
}
