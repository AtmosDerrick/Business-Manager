'use client'

import AllInvoices from '@/components/AllInvoices'
import { faBook, faList, faRepeat, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function page() {
  return (
    <div className='w-3/4 mx-auto mt-8 '>
        

        <div className='bg-gray-100  w-full  rounded-md mt-2 p-4'>

            {/* <div className=''>
                <div className='flex justify-start gap-2'>
                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>All Invoices</h4><div className='w-4 h-4 rounded-full bg-blue-900 flex justify-center items-center text-white '><h5>4</h5></div></button>


                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Overdue</h4><div className='w-4 h-4 rounded-full bg-red-500 flex justify-center items-center text-white '><h5>4</h5></div></button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Unpaid</h4><div className='w-4 h-4 rounded-full bg-orange-500 flex justify-center items-center text-white '><h5>4</h5></div></button>


                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Paid</h4><div className='w-4 h-4 rounded-full bg-green-500 flex justify-center items-center text-white '><h5>4</h5></div></button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Sent by mail</h4>
                
                </button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Trash</h4><div className='w-4 h-4 rounded-full bg-gray-500 flex justify-center items-center text-white '><h5>4</h5></div></button>


            </div> */}


<div className="flex items-center justify-between space-x-4">
      {/* Date From Input */}
      <input
        type="date"
        id="dateFrom"
        name="dateFrom"
        className=" p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Date From"
      />

      {/* Date To Input */}
      <input
        type="date"
        id="dateTo"
        name="dateTo"
        className=" p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Date To"
      />

      {/* Status Dropdown */}
      <select
        id="status"
        name="status"
        className=" p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">-- All --</option>
        <option value="paid">Paid</option>
        <option value="partiallyPaid">Partially Paid</option>
        <option value="unpaid">Unpaid</option>
        <option value="overdue">Overdue</option>
      </select>

      {/* Document Type Dropdown */}
      <select
        id="documentType"
        name="documentType"
        className=" p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">-- All --</option>
        <option value="invoice">Invoice</option>
        <option value="receipt">Receipt</option>
        <option value="estimate">Estimate</option>
        <option value="deliveryNote">Delivery Note</option>
      </select>

      <button className='w-full bg-blue-700 text-white p-2 rounded-md'>
        Search
      </button>
    </div>

    <div className='mt-8'>
                <div className='flex justify-start gap-2'>
                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>All Invoices</h4><div className='w-4 h-4 rounded-full bg-blue-900 flex justify-center items-center text-white '><h5>4</h5></div></button>


                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Last Month</h4></button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Last Quater</h4></button>


                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Export to PDF</h4></button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Export to Excel</h4>
                
                </button>

                <button className='px-4 py-2 bg-white rounded-lg text-sm font-medium flex justify-start gap-2'><h4>Print</h4></button>


            </div>
            </div>


            <div className=' mt-4'>

                <AllInvoices/>
        


            
            </div>
        </div>

      
    </div>
  )
}

export default page
