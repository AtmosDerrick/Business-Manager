import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function page() {
  return (
    <div className='bg-gray-100 w-3/4 mz-auto  mx-auto mt-4  rounded-md py-4 px-4'>
        <div className='bg-blue-100 h-[300px] rounded-lg '><div className='p-2'>
           <div className='flex justify-start gap-4'> <div><button className='border-2 border-gray-500 py-1 px-4 rounded-md font-medium text-black bg-gray-200'>Basic Form</button></div>

<div><button className='border-2 border-gray-300 py-1 px-4 rounded-md font-medium text-white bg-blue-500 flex justify-start gap-3'><div className='w-2'>
    <FontAwesomeIcon icon={faSave} className='text-white'/></div>Save Invoice</button></div></div>
        </div></div>
      
    </div>
  )
}

export default page
