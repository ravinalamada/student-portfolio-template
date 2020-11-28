import React from 'react'

function Design() {
  return (
    <div className="container">
      <h2>Design</h2>
      <ul className="list">
         <li className="list__item">
           <span className="list__span">Figma</span>
           <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
         </li>
         <li className="list__item">
           <span className="list__span">Photoshop</span>
           <progress className='languages--listprogress' id="file" max="100" value="50"> 50% </progress>
         </li>
      </ul>
    </div>
  )
}

export default Design
