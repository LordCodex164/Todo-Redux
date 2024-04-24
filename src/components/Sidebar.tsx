import React, { useState } from 'react'
import { navLinks } from '../constants/data'
import { IoEyeOutline } from 'react-icons/io5'
import { LuEyeOff } from 'react-icons/lu'
const Sidebar = () => {

    const [showSideBar, setShowSidebar] = useState<boolean>(true)

  
  return (
    <aside className='relative lg:block overflow-y-hidden success  w-[15em] h-screen'>
      <div className='flex flex-col items-center justify-center pt-[40px]'>
        <img src='../icon-sidebar'/>
        <p >Todo-App</p>
        <p className=''>
         Testing
        </p>
      </div>
    
     <div className='flex flex-col relative h-full gap-[50px] items-center justify-center'>
       

     <div className='flex flex-col absolute bottom-[40em] gap-[30px]'>
        <button className=''>
            Sign Out
        </button>

        <button className='rounded-md flex items-center gap-2 cursor-pointer bg-[#1ed2bd] text-[#ffffff] hover:text-[#000] px-3 py-3'>
            Show Sidebar <IoEyeOutline/>
        </button>
     </div>
        
     </div>
    
        
   
    </aside>
   
  )
}

export default Sidebar