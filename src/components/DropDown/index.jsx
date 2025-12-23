import { useState } from 'react'

export default function DropDown({ title, content }) {
   const [isOpen, setIsOpen] = useState(false)

   const toggleOpen = () => {
      setIsOpen(!isOpen)
   }

   return (
      <div>
         <div onClick={toggleOpen}>
            <h2>{title}</h2>
            <span>{isOpen ? '▲' : '▼'}</span>
         </div>
         {isOpen && <div>{content}</div>}
      </div>
   )
}
