import React, { useState } from 'react'
import { FaBook } from "react-icons/fa6";
import { Avatar, Drawer, List, Space } from 'antd';
import cart from "../Assests/cart.svg"

const Appbar = () => {
    const [open, setOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(1)
    const [showDrawer, setShowDrawer] = useState(false);





    const menuClicked = () => {
        setOpen(!open);
    };

    const handleListItemClick = () => {
        setShowDrawer(true); // Show the Ant Design Drawer when the list item is clicked
    };

    const handleCloseDrawer = () => {
        setShowDrawer(false); // Close the Drawer
    };
    return (
        <>
            <nav className='mt-5'>
                <div className='md:flex justify-between w-5/6 md:max-w-7xl mx-auto'>
                    <div>
                        <span className='text-red-500 font-bold text-3xl'><FaBook /></span>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <span className='text-red-500 font-bold text-4xl'> Book</span>
                            <span className='text-red-500 font-thin text-3xl'>Shop</span>
                        </div>
                        <div className='md:hidden mt-2' >
                            <button onClick={menuClicked}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={`flex md:block justify-end ${open ? "block" : "hidden"}`}>
                        <ul className='md:flex md:space-x-8 space-y-8 md:space-y-0'>
                            <li onClick={() => setSelectedItem(1)} className={`gener ${selectedItem === 1 ? "bg-red-400 text-white" : "text-black"}`}>
                                <a className='font-body' href='#'>Fantasy</a>
                            </li>
                            <li onClick={() => setSelectedItem(2)} className={`gener ${selectedItem === 2 ? "bg-red-400 text-white" : "text-black"}`}>
                                <a className='font-body' href='#'>Science fiction</a>
                            </li>
                            <li onClick={() => setSelectedItem(3)} className={`gener ${selectedItem === 3 ? "bg-red-400 text-white" : "text-black"}`}>
                                <a className='font-body' href='#'>Mystery fiction</a>
                            </li>
                            <li onClick={() => setSelectedItem(4)} className={`gener ${selectedItem === 4 ? "bg-red-400 text-white" : "text-black"}`}>
                                <a className='font-body' href='#'>More</a>
                            </li>
                            <li className='px-4 py-2 cursor-pointer' onClick={handleListItemClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Drawer title='Cart' placement='right' onClose={handleCloseDrawer} visible={showDrawer}>
            <List
          dataSource={[
            {
              name: 'Book 1',
              price: '100',
              image: 'https://via.placeholder.com/50',
            },
            {
              name: 'Book 2',
              price: '200',
              image: 'https://via.placeholder.com/50',
            },
          ]}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.image} />}
                title={item.name}
                description={item.price}
              />
            </List.Item>
          )}
        />
        <Space align='end' style={{ marginTop: '20px' }}>
          <span>Total: 200</span>
          {/* Add your checkout or other buttons here */}
          <button className='ant-btn ant-btn-primary'>Checkout</button>
        </Space>
            </Drawer>
        </>
    )
}

export default Appbar
