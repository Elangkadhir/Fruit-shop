import React, { useState } from 'react'
import FruitsCard from './FruitsCard'

const Items = () => {

    const [fruits, setFruits] = useState([
        {
          id: 1,
          image: '1',
          name: 'Book 1',
          price: 100
        },
        {
          id: 2,
          image: '2',
          name: 'Book 2',
          price: 200
        },
        {
          id: 3,
          image: '3',
          name: 'Book 3',
          price: 250
        },
        {
          id: 4,
          image: '4',
          name: 'Book 4',
          price: 300
        },
        {
          id: 5,
          image: '5',
          name: 'Book 5',
          price: 250
        },
        {
          id: 6,
          image: '6',
          name: 'Book 6',
          price: 150
        },
        {
          id: 10,
          image: '10',
          name: 'Book 10',
          price: 300
        },
        {
          id: 11,
          image: '11',
          name: 'Book 11',
          price: 300,
          test:"test"
        
        },
        {
          id: 12,
          image: '12',
          name: 'Book 12',
          price: 250
        }
      ])

  return (
    <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
        {
            fruits.map((fruit) => {
                return <FruitsCard key={fruit.id} fruit={fruit}  />
            })
        }
    </section>
  )
}

export default Items
