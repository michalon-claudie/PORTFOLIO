import React from 'react'

export default function Cards(imageSrc,title,description){
    return(
        <div className='card'>
            <img src={imageSrc} alt='imageSrc_picture'/>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}