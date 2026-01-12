import { useState } from 'react'
import '../../styles/DropDown.scss'
import arrow from '../../assets/buttons/arrow-up-24.svg'
/**
 *
 * @param {string} title what you want to show as title of the drop down
 * @param {JSX.Element} content what you want to show as content of the drop down
 * @returns {JSX.Element} DropDown component
 */
export default function DropDown({ title, content }) {
   const [isOpen, setIsOpen] = useState(false)
   const toggleOpen = () => {
      setIsOpen(!isOpen)
   }
   return (
      <div className="drop-down">
         <div className="drop-down__top">
            <h2 className="drop-down__title">{title}</h2>
            <img
               onClick={toggleOpen}
               className={`drop-down__indicator${
                  isOpen ? ' drop-down__indicator--open' : ''
               }`}
               src={arrow}
               alt="Toggle DropDown"
            />
         </div>
         <div
            className={`drop-down__content${
               isOpen ? ' drop-down__content--open' : ''
            }`}
         >
            {content}
         </div>
      </div>
   )
}
