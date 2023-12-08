import React from 'react'

const Divider = ({ title }) => {
  return (
    <div className='relative my-10'>
      {/* divider */}
      <div className='absolute inset-0 flex items-center'>
        <div className='border border-red-200 w-9/12 mx-auto'></div>
      </div>
      {/* Text */}
      <div className='flex justify-center relative'>
        <div className='font-display text-green-400 text-4xl bg-white px-4'>
          {title}
        </div>
      </div>
    </div>
  )
}

export default Divider
