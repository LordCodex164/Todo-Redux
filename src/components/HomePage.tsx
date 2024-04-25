import React, {useState} from 'react'
import AddTaskModal from './AddTaskModal'
import { FaEdit } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { CgAddR } from 'react-icons/cg'
import { MdDelete } from "react-icons/md";

const HomePage = () => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className='relative w-full'>
       
        <div className='px-[20px]'>
            <div className='flex bottom-10 justify-end pt-[40px] w-full'>
               <button className='relative cursor-pointer' onClick={() => setShowModal(true)}>
                 <CgAddR/>
               </button>
            </div>
            <div className='bg-[#8FE1D7] shadow-md whitespace-[5px] text-[#fff8f8] min-h-[200px] px-[30px] py-[20px] mt-[6em]'>
                Search Your Tasks
                <div className='w-full flex flex-col'>
                  <div className='flex min-w-[350px] justify-center mx-auto'>
                    <input type="text" placeholder='Search' className='placeholder:text-sm pl-[10px] text-[#000] w-full py-[5px] outline-none'/>
                    <button className='bg-[#1ed2bd] px-[20px] py-[12px] '><FaSearch/></button>
                  </div>

                  <div className='flex flex-col justify-center w-full mt-[10px]'>
                    <p>Tasks List</p>
                    <ul>
                      <li className='bg-[#fff] py-[12px] flex items-center justify-around mx-auto  max-w-[350px]'>
                        <input type="checkbox" name="" id="" />
                        <span className='text-[#000] stroke-lime-500 line-through'>Make a logo bigger</span>
                         <span className='text-green-400'><FaEdit/></span>
                         <span className='text-red-500 text-[18px]'><MdDelete/></span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>

        {showModal && <AddTaskModal close={() => setShowModal(false)}/>}
    </div>
  )
}

export default HomePage