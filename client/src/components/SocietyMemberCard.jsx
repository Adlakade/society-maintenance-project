import React from 'react'
import "../css/SocietyMemberCard.css"; // Assuming you have a CSS file for styling

const SocietyMemberCard = ({name,image,role}) => {
  return (
   <div className="SocietyMemberCard">
    <div className="image">
        <img src={image} alt={name} />
    </div>
     <h2>{name}</h2>
     <p>{role}</p>
   </div>
  )
}

export default SocietyMemberCard