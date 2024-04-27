import { useState } from 'react'
import { navLinks } from '../constants/data'
import {IoEyeOutline } from 'react-icons/io5'
import { LuEyeOff } from 'react-icons/lu'
import Clock from "../assets/Clock.jpg"

const Sidebar = () => {

    const [showSideBar, setShowSidebar] = useState<boolean>(false)

    const handleClick = () => {
      setShowSidebar(false)
    }


  
  
  return (
    <> 
    <aside className={`${showSideBar ? "hidden" : "relative border-[3px] border-t-[#000] border-r-[#000] lg:block overflow-y-hidden w-[15em] h-screen transition-all delay-200 duration-300 ease-in-out"} `}>
      <div className='flex flex-col gap-[20px] items-center justify-center pt-[40px]'>
        <img src={Clock} alt='Clock' className='w-80px] h-[100px]'/>
      </div>
    
     <div className='flex flex-col relative gap-[50px] items-center'>
       
      <div className='flex flex-col gap-[40px] mt-[40px]'>
        {navLinks.map((link) => (
        <button>
          {link.name}
        </button>
       ))}
      </div>
       

     <div className='flex flex-col absolute top-[14em] lg:top-[15em] gap-[30px]'>
    
        <button onClick={() => setShowSidebar(true)} className='rounded-md flex items-center gap-2 cursor-pointer bg-[#1ed2bd] text-[#ffffff] hover:text-[#000] px-3 py-3'>
            Hide Sidebar <LuEyeOff/>
        </button>
     </div>
        
     </div>
            
    </aside>

    {showSideBar && (
      <div className='relative h-screen flex items-end '>
        <div style={{ zIndex: 999 }} className='bg-[#1ed2bd] absolute h-12 flex items-center justify-center rounded-r-md px-[10px]'>
        <span className='text-[20px] cursor-pointer text-black pl-[5px]' onClick={handleClick}><IoEyeOutline/></span>
        </div>
      </div>
    )}
    </>
   
   
  )
}

export default Sidebar