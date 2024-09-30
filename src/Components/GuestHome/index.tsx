import React from 'react'
import Button from '../Button'

const GuestHome = () => {

  const handleClick = () => {
    fetchRecipe();
  }

  return (
    // display one random meal
    <div className='flex flex-col items-center text-black p-4'>
      <h3 className='text-lg'>Welcome to the greatest recipe generator site</h3>
      <p className='font-semibold'>Get inspired, cook, enjoy!</p>

      {/* Fetch one recipe */}
      <Button buttonText='Regenerate' onClick={handleClick}/>

      {/* Trigger new fetch on button click */}

      {/* embed recipe video */}
    </div>
  )
}

export default GuestHome