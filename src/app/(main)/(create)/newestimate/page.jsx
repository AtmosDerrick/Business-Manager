'use client'

import { faAdd, faCancel, faCircleXmark, faList, faSave, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'

function page() {
  const [image, setImage] = useState(null);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  const [items, setItems] = useState([{ description: "", amount: "" }]);


  const [totalAmount, setTotalAmount] = useState(0);

  const handleDeleteItem = (index) => {
    if (items.length !== 1) {
      const deletedItemAmount = parseInt(items[index].amount || "0", 10);
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
      setTotalAmount((prevTotal) => prevTotal - deletedItemAmount);
    }
  };
const handleAddItem = () => {
  const lastItem = items[items.length - 1];
  if (lastItem.description !== "" && lastItem.amount !== "") {
    const newItemAmount = parseInt(lastItem.amount, 10);
    setItems([...items, { description: "", amount: "" }]);
    setTotalAmount((prevTotal) => prevTotal + newItemAmount);
  }
};

  const handleDescriptionChange = (e, index) => {
    const newItems = [...items];
    newItems[index].description = e.target.value;
    setItems(newItems);
  };

  const handleAmountChange = (e, index) => {
    const newItems = [...items];
    newItems[index].amount = e.target.value;
    setItems(newItems);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleInvoiceNumberChange = (e) => {
    setInvoiceNumber(e.target.value);
  };

  const handleInvoiceDateChange = (e) => {
    setInvoiceDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='bg-gray-100 w-3/4   mx-auto mt-4  rounded-md py-4 px-4'>
        <div className='bg-blue-100 shadow-sm rounded-lg py-2 px-2 '><div className='p-2'>
           <div className='flex justify-start gap-4'> <div><button className='border-2 border-gray-200 py-1 px-4 rounded-md font-medium text-black bg-gray-200'>Basic Form</button></div>

          <div>
    <button className='border-2 border-gray-100 py-1 px-4 rounded-md font-medium text-white bg-blue-500 flex justify-start gap-3'><div className='w-2'>
    <FontAwesomeIcon icon={faSave} className='text-white'/></div>Estimate Reciept</button></div></div>
        </div>
          <div className='flex justify-between gap-8 border-b-[2px] border-b-gray-500 pb-4'>
            <div className="w-full flex flex-col space-y-4">
                      <label htmlFor="from" className="font-bold">
                        From:
                      </label>
                    <textarea
                      id="from"
                      name="from"
                      rows="4"
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="Enter your address"
                    ></textarea>

                    <label htmlFor="to" className="font-bold">
                      Bill To:
                    </label>
                    <textarea
                      id="to"
                      name="to"
                      rows="4"
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="Enter the recipient's address"
                    ></textarea>
                  </div>

                  <div className='w-1/2 '>

                  <div onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label htmlFor="image" className="font-bold">
              Upload Logo
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-md p-2"
            />

            <label htmlFor="invoiceNumber" className="font-bold">
              Invoice Number:
            </label>
            <input
              type="text"
              id="invoiceNumber"
              name="invoiceNumber"
              value={invoiceNumber}
              onChange={handleInvoiceNumberChange}
              className="border border-gray-300 rounded-md p-2"
            />

            <label htmlFor="invoiceDate" className="font-bold">
              Invoice Date:
            </label>
            <input
              type="date"
              id="invoiceDate"
              name="invoiceDate"
              value={invoiceDate}
              onChange={handleInvoiceDateChange}
              className="border border-gray-300 rounded-md p-2"
            />
      </div>


            </div>

           
           
          </div>

          <div className="w-full mt-4 pt-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between gap-4">
          <div className="px-4 pb-2 w-full">
            <div className="pb-2">
              <label htmlFor={`description${index}`} className="font-bold">
                Description
              </label>
            </div>
            <textarea
              id={`description${index}`}
              name={`description${index}`}
              rows="1"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter description"
              value={item.description}
              onChange={(e) => handleDescriptionChange(e, index)}
            ></textarea>
          </div>

          <div className="w-3/4">
            <div className="pb-2">
              <label htmlFor={`amount${index}`} className="font-bold">
                Amount ($)
              </label>
            </div>
            <input
              type="number"
              id={`amount${index}`}
              name={`amount${index}`}
              className="border border-gray-300 rounded-md p-2 w-3/4"
              placeholder="Enter amount"
              value={item.amount}
              onChange={(e) => handleAmountChange(e, index)}
            />
          </div>

          
            <div className='w-1/4 flex justify-center items-center'>
              <button onClick={() => handleDeleteItem(index)} className='w-8'>  <FontAwesomeIcon icon={faCircleXmark}  className='text-red-500'/>
              </button>   
            </div>
          
        </div>
      ))}

              <div className='w-full  py-4 flex justify-between gap-4 '>
                <button className='w-full py-2 flex justify-center gap-4 bg-yellow-100'>
                <div className=''><FontAwesomeIcon icon={faList}/></div>
                Add Saved Item</button>
                <button onClick={handleAddItem} className="w-full py-2 flex justify-center gap-4 bg-yellow-100">
          <div className=""><FontAwesomeIcon icon={faAdd} /></div>
          Add New Item
        </button>

              </div>

      <div className='px-8'>
                      <div className='w-full py-12  flex justify-end mt-8'>

                      

      <div className='w-1/4 flex justify-between text-3xl font-semibold items-center'>
        <h3 className=' font-bold text-black'>Total</h3>
        <div className='flex justify-start gap-4'>
          <h3 className='text-blue-600 text-2xl'>$</h3>
          <h3 className='text-blue-600 text-2xl'>{totalAmount && totalAmount}</h3>
        </div>

</div>
</div></div>

<div className='w-full gap-8 flex justify-between'>

<div className='w-3/4'>
  <label className='text-base font-medium text-blue-600 mb-4'>Term & Condition</label>
  <textarea rows={5} className='w-full rounded-md p-2' placeholder='Payment is due with the first 20 days' ></textarea>
</div>

<div className='w-2/5'>
<label htmlFor="image" className="font-bold">
              Upload Signature
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-md p-2"
            />
</div>

</div>


          </div>


        
        </div>



        <div className='w-full mt-4 '>
          
          <button className='w-full text-center bg-blue-500 py-2 font-medium text-white rounded-md flex justify-center items-center gap-4'><div className='w-4'> 
          <FontAwesomeIcon icon={faSave} className='w-4'/>
          </div>Save Estimate</button>
        </div>
      
    </div>
  )
}

export default page
