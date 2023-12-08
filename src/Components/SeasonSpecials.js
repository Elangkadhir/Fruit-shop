import React from 'react'
import FruitsCard from './FruitsCard'
import { useState } from 'react'
import Divider from './Divider'

const SeasonSpecials = () => {

    const [fruits, setFruits] = useState([
        { id: 3, image: "3", name: "Book3", price: 100, },
        { id: 5, image: "5", name: "Book5", price: 100, },
        { id: 7, image: "7", name: "Book7", price: 150, }
    ])

    return (
        <section className='w-5/6 mx-auto my-10'>

            <Divider title={'Special release'} />
            <div className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                {
                    fruits.map((fruit) => {
                        return <FruitsCard key={fruit.id} fruit={fruit} />
                    })
                }
            </div>
        </section>
    )
}

export default SeasonSpecials
