import React, { useState } from 'react';

const AddButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Hide the message after 2 seconds (2000 milliseconds)
    console.log('REMOVE ITEM');
  };

  return (
    <>
      <div className='flex justify-between items-center font-body border mr-11 border-green-700 bg-white w-full mb-5 h-10 rounded-md md:my-0 m-1 cursor-pointer'>
        <div></div>
        <div className='md:text-xm' onClick={handleClick}>
          Add to cart
        </div>
        <div></div>
      </div>

      {showMessage && (
        <div className='bg-green-500 text-white p-2 absolute top-0 left-1/2 transform -translate-x-1/2'>
          Added to cart!
        </div>
      )}
    </>
  );
};

export default AddButton;
