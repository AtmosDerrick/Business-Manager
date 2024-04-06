'use client'

import AllInvoices from '@/components/AllInvoices'
import { faBook, faList, faRepeat, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function page() {
  return (
    <div className='w-3/4 mx-auto mt-8 '>
        

        <div className='bg-gray-100  w-full  rounded-md mt-2 p-4'>

            <div className=''>
                <div className='flex justify-start gap-2'>
                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>All Invoices</h4><div className='w-4 h-4 rounded-full bg-blue-900 flex justify-center items-center text-white '><h5>4</h5></div></button>


                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Overdue</h4><div className='w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-white '><h5>4</h5></div></button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Unpaid</h4><div className='w-4 h-4 rounded-full bg-orange-500 flex justify-center items-center text-white '><h5>4</h5></div></button>


                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Paid</h4><div className='w-4 h-4 rounded-full bg-green-500 flex justify-center items-center text-white '><h5>4</h5></div></button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Sent by mail</h4>
                
                </button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Trash</h4><div className='w-4 h-4 rounded-full bg-gray-500 flex justify-center items-center text-white '><h5>4</h5></div></button>


            </div>

            <div className=' mt-4'>

                <AllInvoices/>
            </div>


            
            </div>
        </div>

      
    </div>
  )
}

export default page
