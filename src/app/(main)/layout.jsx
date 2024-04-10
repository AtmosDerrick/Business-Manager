'use client'

import { faAngleDown, faCirclePlus, faGear, faMagnifyingGlass,  faList, faUsers, faCircle, faBook, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";




export default function RootLayout({ children }) {
    const pathname = usePathname();
    const [lastPath, setLastPath] = useState("")
    const [newTab, setNewTab] = useState("")

    useEffect(() => {
        const splitPath = pathname.split("/");
        const pathName = splitPath[splitPath.length - 1];
        setLastPath(pathName);
    
        if (pathName === "invoice" || pathName === "customers" || pathName === "reports") {
            setNewTab("");
        } else {
            switch (pathName) {
                case "createinvoice":
                    setNewTab("New Invoice");
                    break; // Added break statement to exit switch block
                case "newreciept":
                    setNewTab("New Reciept")
                    break;
                case "newestimate":
                    setNewTab("New Estimate")
                    break;
                default:
                    setNewTab("");
                    break; // Added break statement to exit switch block
            }
        }
    
        console.log(lastPath);
        console.log(newTab);
    }, [pathname]); // Added pathname as a dependency to the useEffect hook
    


  return (
    <html lang="en">
      <body>
      <nav className="flex justify-between h-[vh] py-2 items-center px-8 bg-gray-100 border-b-2 border-gray-300 ">
          <h2 className="text-xl font-semibold w-full">Business<span className="bg-yellow-500 ml-2 px-4 rounded-xl">Doc</span></h2>
          <div className="flex justify-start gap-2 border-[2px] py-2 px-2 bg-white w-full rounded-xl" >
            <div className="w-5">  
                    <FontAwesomeIcon icon={faMagnifyingGlass}  />
            </div>          
            <input type="text" className="border-none text-sm w-full focus:outline-none"/>
          </div>
          <div className="w-full flex justify-end gap-2">
            {/* <Image src="/gh-flag.jpeg" alt="Ghana Flag" width={20} height={5}/> */}
            <h4 className="text-xs ">atmosderrick@gmail.com</h4>
            <div className="flex justify-start items-center gap-2">
                <div className="w-4">
                    <FontAwesomeIcon icon={faGear} />
                </div>

                <div className="w-3"><FontAwesomeIcon icon={faAngleDown} /></div>
            </div>
            </div>
          

        </nav>

 
        <div className="w-full  mx-auto mt-12  ">
            <div className="flex justify-center gap-2 items-center">
                <div className="w-4"><FontAwesomeIcon icon={faCirclePlus} className="text-orange-600" /></div>
                <h3 className="text-base font-medium">New:</h3>
            </div>
            <div className="w-full text-sm font-serif font-normal text-blue-500">
                <div className="flex justify-center gap-6">
                        <div className="flex justify-start gap-3 items-center">
                        <div className="text-xs "><FontAwesomeIcon icon={faCircle} className=" text-blue-700" /></div>
                        <Link href="/createinvoice" className="text-base font-normal">Invoice</Link>
                        </div>

                    <div className="flex justify-start gap-3 items-center">
                        <div className="text-xs "><FontAwesomeIcon icon={faCircle} className=" text-blue-700" /></div>
                        <Link href="/newreciept" className="text-base font-normal">Reciept</Link>
                    </div>

                   

                    <div className="flex justify-start gap-3 items-center">
                        <div className="text-xs "><FontAwesomeIcon icon={faCircle} className=" text-blue-700" /></div>
                        <Link href="/newestimate" className="text-base font-normal">Estimate</Link>
                    </div>

                    <div className="flex justify-start gap-3 items-center">
                    <div className="text-xs "><FontAwesomeIcon icon={faCircle} className=" text-blue-700" /></div>
                    <Link href="/newpurchasenote" className="text-base font-normal">Purchase Note</Link>
                </div>
                <div className="flex justify-start gap-3 items-center">
                        <div className="text-xs "><FontAwesomeIcon icon={faCircle} className=" text-blue-700" /></div>
                        <Link href="/newcreatenote" className="text-base font-normal">Credit Note</Link>
                    </div>

                    <div className="flex justify-start gap-3 items-center">
                        <div className="text-xs "><FontAwesomeIcon icon={faCircle} className=" text-blue-700" /></div>
                        <Link href="newdeliverynote" className="text-base font-normal">Delivery Note</Link>
                    </div>

                    <div className="flex justify-start gap-3 items-center">
                        <div className="text-xs "><FontAwesomeIcon icon={faCircle} className=" text-blue-700" /></div>
                        <Link href="/newcontractdocument" className="text-base font-normal">Contract Document</Link>
                    </div>
                </div>

                

                <div className="flex justify-center gap-4 mt-4">
                       


                </div>
            </div>

        </div>

        <div className='flex justify-start gap-4 w-3/4 mx-auto mt-8'>
            <div><Link href="/invoice" className={lastPath == 'invoice' ? 'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-200 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200':'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-yellow-100 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200'}><div className='w-4'><FontAwesomeIcon icon={faList} className='text-blue-600' /></div><h4>My Invoices</h4></Link></div>

            <div><Link href="/customers" className={lastPath == 'customers' ? 'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-200 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200':'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-yellow-100 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200'}><div className='w-4'><FontAwesomeIcon icon={faUsers} className='text-blue-600' /></div><h4>My Customers</h4></Link></div>

            <div><Link href="/reports" className={lastPath == 'reports' ? 'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-200 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200':'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-yellow-100 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200'}><div className='w-4'><FontAwesomeIcon icon={faBook} className='text-blue-600' /></div><h4>My Reports</h4></Link></div>

           { newTab !== "" &&
            <div><Link href="/reports" className={lastPath == 'reports' ? 'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-gray-200 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200':'flex justify-center items-center gap-2 text-sm font-medium px-4 py-2 bg-yellow-100 rounded-lg border-[1px] border-gray-300 hover:opacity-50 transition-all duration-200'}><div className='w-4'><FontAwesomeIcon icon={faAdd} className='text-blue-600' /></div><h4>{newTab}</h4></Link></div>}


        </div>
        
        {children}</body>
    </html>
  );
}
