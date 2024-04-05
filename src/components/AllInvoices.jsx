import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState} from 'react'

function AllInvoices() {
    const [selectedRows, setSelectedRows] = useState([]);

   
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
    <div>
         <div className="overflow-y-visible">

            {selectedRows.length > 0 && <div className='text-red-500 flex justify-start gap-2 my-2'><div className='w-4'><FontAwesomeIcon icon={faTrash}/></div><h5>Delete</h5></div>}
      <table className="min-w-full divide-y divide-gray-200">
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
    </div>
      
    </div>
  )
}

export default AllInvoices
