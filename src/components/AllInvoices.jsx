'use client'

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation';


function AllInvoices() {
    const [selectedRows, setSelectedRows] = useState([]);

    const pathname = usePathname();
    const [lastPath, setLastPath] = useState("")

    useEffect(()=>{
        const splitPath = pathname.split("/")
        const pathName = splitPath[splitPath.length-1]
        setLastPath(pathName)
    },[])

   
    const businesses = [
        {
          id: 1,
          name: "ABC Inc.",
          date: "2024-04-01",
          status: "paid",
          totalAmount: 1000
        },
        {
          id: 2,
          name: "XYZ Co.",
          date: "2024-03-15",
          status: "unpaid",
          totalAmount: 1500
        },
        {
          id: 3,
          name: "123 Corp",
          date: "2024-04-02",
          status: "partially paid",
          totalAmount: 2000
        }
    ];

    const customers = [
      {
        id: 1,
        name: "John Doe",
        numberOfDocuments: 5,
        payment: {
          status: "Paid",
          paidAmount: 200,
          totalAmount: 200
        }
      },
      {
        id: 2,
        name: "Jane Smith",
        numberOfDocuments: 3,
        payment: {
          status: "Unpaid",
          paidAmount: 0,
          totalAmount: 150
        }
      },
      {
        id: 3,
        name: "Alice Johnson",
        numberOfDocuments: 7,
        payment: {
          status: "Paid",
          paidAmount: 350,
          totalAmount: 350
        }
      }
    ];


    const reports = [
      {
        customer: "John Doe",
        document: "Invoice",
        transactionId: "INV-001",
        date: "2024-04-01",
        subTotal: 500,
        tax: 50,
        paidAmount: 550,
        total: 550
      },
      {
        customer: "Jane Smith",
        document: "Receipt",
        transactionId: "REC-001",
        date: "2024-03-15",
        subTotal: 300,
        tax: 30,
        paidAmount: 330,
        total: 330
      },
      {
        customer: "Alice Johnson",
        document: "Estimate",
        transactionId: "EST-001",
        date: "2024-04-02",
        subTotal: 700,
        tax: 70,
        paidAmount: 770,
        total: 770
      }
    ];


      const handleCheckboxChange = (id) => {
        setSelectedRows((prevSelectedRows) => {
          if (prevSelectedRows.includes(id)) {
            return prevSelectedRows.filter((rowId) => rowId !== id);
          } else {
            return [...prevSelectedRows, id];
          }
        });

        console.log(selectedRows)
      };
      
  return (
    <div className='bg-white'>
         {
          lastPath === 'invoice' && <div>

<div className="overflow-y-visible">

{selectedRows.length > 0 && <div className='text-red-500 flex justify-start gap-2 my-2'><div className='w-4'><FontAwesomeIcon icon={faTrash}/></div><h5>Delete</h5></div>}
<table className="min-w-full divide-y divide-gray-200 border-2 border-b-blue-500">
<thead className="bg-gray-50">
<tr>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  <input type="checkbox" />
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  ID
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Name
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Date
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Status
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Total Amount
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{businesses.map((business) => (
<tr key={business.id} className={selectedRows.includes(business.id) ? 'bg-gray-100' : ''}>
  <td className="px-6 py-4 whitespace-nowrap">
    <input
      type="checkbox"
      checked={selectedRows.includes(business.id)}
      onChange={() => handleCheckboxChange(business.id)}
      className="rounded"
    />
  </td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.id}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.name}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.date}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.status}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.totalAmount}</td>
</tr>
))}


</tbody>
</table>
<div className='py-2'><div className='mt-4 w-full flex justify-between text-sm uppercase font-semibold px-4'>
<h3 className='w-full'>Total</h3>
<h3 className='w-full flex justify-end'>$ 7000</h3>
</div>

<div className='mt-4 w-full flex justify-between text-sm uppercase font-semibold px-4'>
<h3 className='w-full'>Paid Amount</h3>
<h3 className='w-full flex justify-end'>$ 4000</h3>
</div>

<div className='mt-4 w-full flex justify-between text-sm uppercase font-semibold px-4'>
<h3 className='w-full'>Balance Due</h3>
<h3 className='w-full flex justify-end'>$ 3000</h3>
</div></div>
</div>

          </div>
         }




{
          lastPath === 'customers' && <div>

<div className="overflow-y-visible">

{selectedRows.length > 0 && <div className='text-red-500 flex justify-start gap-2 my-2'><div className='w-4'><FontAwesomeIcon icon={faTrash}/></div><h5>Delete</h5></div>}
<table className="min-w-full divide-y divide-gray-200 border-2 border-b-blue-500">
<thead className="bg-gray-50">
<tr>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  <input type="checkbox" />
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Customers
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Documents
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Payments
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Paid Amount
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Total 
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{customers.map((business) => (
<tr key={business.id} className={selectedRows.includes(business.id) ? 'bg-gray-100' : ''}>
  <td className="px-6 py-4 whitespace-nowrap">
    <input
      type="checkbox"
      checked={selectedRows.includes(business.id)}
      onChange={() => handleCheckboxChange(business.id)}
      className="rounded"
    />
  </td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.name}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.numberOfDocuments}</td>
  <td className={business.payment.status == "Paid" ? "px-6 py-4 whitespace-nowrap text-sm font-medium text-green-500 ":"px-6 py-4 whitespace-nowrap text-sm font-medium text-red-500"}>{business.payment.status}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.payment.paidAmount}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.payment.totalAmount}</td>
</tr>
))}


</tbody>
</table>
<div className='py-2'><div className='mt-4 w-full flex justify-between text-sm uppercase font-semibold px-4'>
<h3 className='w-full'>Total</h3>
<h3 className='w-full flex justify-end'>$ 7000</h3>
</div>

<div className='mt-4 w-full flex justify-between text-sm uppercase font-semibold px-4'>
<h3 className='w-full'>Paid Amount</h3>
<h3 className='w-full flex justify-end'>$ 4000</h3>
</div>

<div className='mt-4 w-full flex justify-between text-sm uppercase font-semibold px-4'>
<h3 className='w-full'>Balance Due</h3>
<h3 className='w-full flex justify-end'>$ 3000</h3>
</div></div>
</div>

          </div>
         }



{
          lastPath === 'reports' && <div>

<div className="overflow-y-visible">


<table className="min-w-full divide-y divide-gray-200 border-2 border-b-blue-500">
<thead className="bg-gray-50">
<tr>

<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Customers
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Documents
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Number
</th>
<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Date
</th>

<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
SubTotal
</th>

<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Tax
</th>

<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Paid Amount
</th>


<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  Total 
</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{reports.map((business) => (
<tr key={business.id} className={selectedRows.includes(business.id) ? 'bg-gray-100' : ''}>
  
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.customer}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.document}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{business.transactionId}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.date}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.subTotal}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.tax}</td>

  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.paidAmount}</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">{business.total}</td>

  
</tr>


))}

<tr >
  
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">Total $</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal"></td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium "></td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal"></td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">750</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">0.00</td>

  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">450</td>
  <td className="px-6 py-4 whitespace-nowrap text-sm font-normal">750</td>

  
</tr>


</tbody>
</table>

</div>

          </div>
         }










    </div>
  )
}

export default AllInvoices
