import React, { useState } from 'react'

const Filters = () => {

    const [selectedItem, setSelectedItem] = useState(1)
  return (
   <section className='my-10 py-3 w-3/5 md:w-4/6 mx-auto flex flex-col md:flex-row  justify-around'>
    <button onClick={()=> setSelectedItem(1)} className={`filter ${selectedItem === 1 ? "bg-red-400 text-white" : "text-black"}`}>Latest</button>
    <button onClick={()=> setSelectedItem(2)} className={`filter ${selectedItem === 2 ? "bg-red-400 text-white" : "text-black"}`}>Best Seller</button>
    <button onClick={()=> setSelectedItem(3)} className={`filter ${selectedItem === 3 ? "bg-red-400 text-white" : "text-black"}`}>Special release</button>
   </section>
  )
}
 
export default Filters
