
import React from 'react'
import { Icon } from '@iconify/react';


  
export default function Card(props) {
  console.log(props)

  return (
    <div className='card'>
    <div className='top'>
      <div  className='topContent'>
        <img src={props.image} alt="portrait" />
        <h1>{props.name}</h1>
        <h4>{props.title} - {props.age}- {props.country}</h4>
      </div>
    </div>

    <div className='cardBody'>
      <h1>ABOUT ME</h1>
      <p>{props.aboutMe}</p>
    
      <div className='skills'>
        <h1>SKILLS</h1>
      <p>{props.skills}</p>
    </div>
    </div>

    

<div className='footer'>
<div className='icon'><a href={props.twitter}><Icon icon="akar-icons:twitter-fill" /></a></div>
<div className='icon'><a href={props.github}><Icon icon="akar-icons:github-fill" /></a></div>
</div>

  </div>
  )
}
