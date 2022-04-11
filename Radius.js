import React from 'react'

const Radius = (longitude,latitude) => {
    const radius = Math.sqrt(Math.pow(longitude,2) + Math.pow(latitude,2))
    return radius
}

export default Radius
