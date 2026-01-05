import { useState } from 'react'
import '../../styles/DropDown.scss'
import arrowUp from '../../assets/buttons/arrow-up-24.svg'
import arrowDown from '../../assets/buttons/arrow-down-24.svg'

export default function DropDown({ title, content }) {
   const [isOpen, setIsOpen] = useState(false)

   const toggleOpen = () => {
      setIsOpen(!isOpen)
   }

   return (
      <div className="drop-down">
         <div className="drop-down__top" onClick={toggleOpen}>
            <h2 className="drop-down__title">{title}</h2>
            <img
               className="drop-down__indicator "
               src={isOpen ? arrowDown : arrowUp}
               alt="Toggle DropDown"
            />
         </div>
         {isOpen && <div className="drop-down__content">{content}</div>}
      </div>
   )
}
