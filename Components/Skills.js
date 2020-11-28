import React from 'react'

function Skills() {
  return (
    <div className="container">
       <h2>Front end</h2>
       <ul className="list">
         <li className="list__item">
           <span className="list__span">React</span>
           <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
         </li>
         <li className="list__item">
           <span className="list__span">Javascript</span>
           <progress className='languages--listprogress' id="file" max="100" value="100"> 100% </progress>
         </li>
         <li className="list__item">
           <span className="list__span">Css</span>
           <progress className='languages--listprogress' id="file" max="100" value="90"> 90% </progress>
         </li>
         <li className="list__item">
           <span className="list__span">Redux</span>
           <progress className='languages--listprogress' id="file" max="100" value="03"> 03% </progress>
         </li>
         <li className="list__item">
           <span className="list__span">React native</span>
           <progress className='languages--listprogress' id="file" max="100" value="0"> 0% </progress>
         </li>
       </ul>
    </div>
  )
}

export default Skills
