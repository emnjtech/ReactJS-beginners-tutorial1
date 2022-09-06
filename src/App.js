import React from 'react'
import Card from './Card'
import instr from './instructors'



export default function App(){



return (
<div className='container'>
{instr.map(dev => 

<Card 
key={dev.id}
image={dev.image}
title={dev.title}
name={dev.name}
age={dev.age}
twitter={dev.title}
github={dev.github}
aboutMe={dev.aboutMe}
skills={dev.skills}
country={dev.country}

/>
  
  
  
  
  )}

</div>
  )
}
