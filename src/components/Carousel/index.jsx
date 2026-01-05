import { useState } from 'react'
import '../../styles/Carousel.scss'
import arrowBack from '../../assets/buttons/arrow_back.svg'
import arrowForward from '../../assets/buttons/arrow_forward.svg'

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
      <div className="carousel">
         <div className="carousel__container">
            <figure className="carousel__item">
               <img
                  className="carousel__picture"
                  src={currentSrc}
                  alt="housing"
               />
               {pictures.length > 1 && (
                  <figcaption className="carousel__caption">{`${
                     pictures.indexOf(currentSrc) + 1
                  } / ${pictures.length}`}</figcaption>
               )}
            </figure>
         </div>
         {pictures.length > 1 && (
            <div className="carousel__button-container">
               <button className="carousel__button" onClick={handlePrevClick}>
                  <img src={arrowBack} alt="previous" />
               </button>
               <button className="carousel__button" onClick={handleNextClick}>
                  <img src={arrowForward} alt="next" />
               </button>
            </div>
         )}
      </div>
   )
}
