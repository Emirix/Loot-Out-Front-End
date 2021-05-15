import React from 'react'

function ServiceCard({icon,heading,description,servicetype}) {
    return (
        <div className={`ServiceCard ${servicetype}`}>
            <img src={icon} alt=""/>
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard
