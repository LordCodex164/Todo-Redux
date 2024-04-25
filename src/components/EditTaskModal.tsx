import {Fragment} from 'react'
import { FaXmark } from 'react-icons/fa6'
import { todosState } from '../store/Todo/actions';
import { Listbox, Transition } from '@headlessui/react'
import { BiChevronUp } from 'react-icons/bi';

interface EditTaskModalProps {
    close: () => void;
    item: todosState;
}

const EditTaskModal = ({close, item}: EditTaskModalProps) => {

    console.log(item)

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-center h-full bg-[#0618028c] z-[99999999999] transition-width duration-500 delay-700 ease-out'>
        <div className='relative w-full flex justify-center'>
           <div className='bg-[#fff] rounded-[10px] absolute top-[10em]  flex flex-col min-w-[450px] mx-auto min-h-[153px] px-[16px] shadow-md pt-[16px]'>
             <h3>Add New Board</h3>
               <span>
                <FaXmark onClick={close} className='absolute cursor-pointer text-[25px] right-0 pr-[10px]'/>
               </span>
              <form>
                <div className='flex flex-col gap-[24px]'>
                 <div className='flex flex-col'>
                    <label htmlFor="">
                        Task Name
                    </label>
                    <input type="text" placeholder='' value={item.taskName}/>
                 </div>

                 <div className='flex flex-col'>
                    <label htmlFor="">
                        Task Name
                    </label>
                    <Listbox value={selected} onChange={setSelected}>
             
             <div className='relative mt-3'>
                <Listbox.Button className="relative w-full flex justify-between items-center cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                   <span className='block truncate'>{selected.name}</span>
                    <span className=''>
                      <BiChevronUp/>
                    </span>
                </Listbox.Button>
                <Transition
                as={Fragment}>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                   {buttonStatus.map((item, i) => (
                    <Listbox.Option
                     key={i}
                     className={({active}) => `relative cursor-default select-none py-2 pl-[10px] pr-4 ${active ? "bg-[#1ed2bd] text-white": "bg-[#fff] "}`}
                     value={item}
                    >

                      {({selected}) => (
                        <>
                         <span className={`block ${selected ? "font-bold text-[10px]": "font-normal"}`}>
                            {item.name}
                         </span>
                        </>
                      )}
                       
                    </Listbox.Option>
                   ))}
                </Listbox.Options>

                </Transition>
             </div>

           </Listbox>
                 </div>
                    
                </div>
              </form>
           </div>
        </div>
    </div>

  )
}

export default EditTaskModal