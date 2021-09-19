import React from "react";

function Person(props) {
  const {name, profession, experience} = props.PersonsDetail;
  return (
    <div className='card'>
      <h4 className='name'>{name}</h4>
      <h5 className='proff'>{profession}</h5>
      <h4 className='ex'>{experience} Years</h4>
    </div>
  )
  
}

export default Person