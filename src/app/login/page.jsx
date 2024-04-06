'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'


function page() {
    const router = useRouter()


    const handleLogin = () =>{
        router.push('/main/invoice')    }
  return (
    <div >
        <nav className="flex justify-between h-[vh] py-2 items-center px-8 bg-gray-100 border-b-2 border-gray-300 ">
          <h2 className="text-xl font-semibold">Business<span className="bg-yellow-500 ml-2 px-4 rounded-xl">Doc</span></h2>
          <div><Image src="/gh-flag.jpeg" alt="Ghana Flag" width={40} height={10}/></div>
          

        </nav>
        <div className="w-4/5 mx-auto mt-4">
       <div className="flex justify-start gap-4 items-center"> 
            <div className="w-4">
                <FontAwesomeIcon icon={faCircleDot} className="text-orange-500" />
                </div>
            <div className="text-sm font-medium">
                You are here : <span className="text-gray-600">Home / Sign In</span>
            </div>
        </div>
        
        <div className="mt-8 text-center">
            <h2 className="text-3xl font-medium">Business Doc Sign In</h2>
            <h4 className="mt-2 text-sm">Please enter your e-mail address for your Invoice Home account.</h4>
        </div>

        <div className="mt-4 w-1/3 mx-auto">
            <label className="font-medium">Email</label><br></br>
            <input type="text" className="border-[2px] border-gray-400 mt-2 rounded-md w-full h-[40px] p-2 text-sm" />

            <div className="mt-4"><label className="font-medium mt-4">Paasword</label><br></br>
            <input type="password" className="border-[2px] border-gray-400 mt-2 rounded-md w-full h-[40px] p-2 text-sm" /></div>
            <button className="w-full bg-blue-900 mt-4 py-3 rounded-md text-white font-medium" onClick={handleLogin}>Sign In</button>

            <div className="mt-8 text-gray-600 text-center text-sm"><Link href=""><h4>Forgot your password</h4>
</Link></div>

<div className="mt-8 full text-gray-900 text-center text-sm"><h4>Don't have an account yet? No worries, <Link href="" className="underline">
    Joining is easy</Link></h4></div>

        </div>

      
    </div>
    <div className="w-full border-b-[1.5px] mt-8"></div>
    <div className="w-4/5 mx-auto">
        <h3 className="text-sm font-semibold text-gray-900 text-center mt-4">Or sign in with services you already have:</h3>

        <div className="w-full flex justify-center mt-4 gap-4" >
            <Link href="/">        
                <Image src="/google-button.png" width={150} height={10} alt="signin with google"/>
            </Link>
        </div>



    </div>
    </div>
  )
}

export default page
