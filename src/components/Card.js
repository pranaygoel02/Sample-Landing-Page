import React from 'react'
import { Link } from 'react-router-dom'

function Card({icon,title,description,link}) {
  return (
    <Link to={link} className='flex flex-col w-full rounded-lg bg-white shadow-lg gap-4 items-start justify-center p-6 group text-black hover:bg-primary hover:text-neutral-100 outline outline-1 outline-neutral-200 hover:outline-none hover:shadow-lg hover:scale-105  transition-all'>
        <div className='rounded-full bg-neutral-200 w-24 p-4'>
            <img className='w-full' src={icon}/>
        </div>
        <h3 className='font-bold text-xl'>{title}</h3>
        <p className='text-neutral-500 group-hover:text-neutral-200 text-sm'>{description}</p>
    </Link>
  )
}

export default Card