import React from 'react'

import './CreatedAt.css'

function CreatedAt() {
    const year = new Date().getFullYear().toString()
    const day = new Date().getDay().toString()
    const month = new Date().getMonth().toString()
    const createdAt = `Date Created: ${month}/${day}/${year}`
console.log(createdAt)
  return (
    <div className='createdAt'>
        {createdAt}
    </div>

  )
}

export default CreatedAt