import React from 'react'
import AddButton from './AddButton'

const FruitsCard = ({ fruit }) => {
  return (
    <div className='rounded-2xl overflow-hidden shadow-lg transform group hover:scale-110 duration-100 relative'>
      <img src={require(`../Assests/${fruit.image}.jpeg`)} alt={`${fruit.image}`} className='w-50 h-50 mx-auto' />
      <div className='flex flex-col items-center my-1 space-y-1'>
        <span className='font-body text-slate-500 block'>{fruit.name}</span>
        <span className='font-body text-slate-500'><span className='text-base font-bold font-serif text-slate-950'> ₹ </span>{fruit.price}</span>
        <span className='font-body text-green-500 text-xs invisible group-hover:visible'><AddButton /></span>
      </div>
      <span className='absolute top-3 right-3 bg-green-500 text-white border-green-500 p-1 rounded-lg invisible group-hover:visible'>10% off</span>
    </div>
  )
}

export default FruitsCard
