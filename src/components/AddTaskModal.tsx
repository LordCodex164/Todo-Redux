import {Fragment, ReducerState, useState} from 'react'
import Button from './common/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../store/Todo/actions'
import uniqid from 'uniqid';
import { toast } from 'react-toast'
import { Listbox, Transition } from '@headlessui/react'
import { BiChevronUp } from 'react-icons/bi';


interface AddTaskModalProps{
  close: () => void
}

const AddTaskModal = ({close}: AddTaskModalProps) => {

  const dispatch = useDispatch()

  const ButtonTitles =  ["Due Date"]

  
  const buttonStatus = [
    { name: 'Not Started' },
    { name: 'In Progress' },
    { name: 'Completed' },
  ]
const [selected, setSelected] = useState(buttonStatus[0])

  const [formData, setFormData] = useState({
    taskName: "",
    desc: "",
    dueDate: "",
    status: "not started"
  })

  const [isLoading, setIsloading] = useState<boolean>(false)

  const handleTodo = () => {
    if(formData.taskName == "" && formData.desc == "") {
    toast.error("Pls fill in the important details")
    return;
    }
    else {
      const data = {
       id: uniqid(),
       taskName: formData.taskName,
       desc: formData.desc,
       dueDate: formData.dueDate,
       status: formData.status
    }
    const action = dispatch(addTodo(data))
    if(action) {
     setIsloading(true)
      const timeOut  = setTimeout(() => {
       setIsloading(false) 
       close()
      }, 1000)
    }
    }
  }

  const data = new Date().toISOString().split("T")[0];

  const handleOnChangeButton = (e: any) => {
    console.log(e.target.value)
    setFormData({...formData, dueDate: e.target.value})
  }

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-center h-full bg-[#0618028c] z-[99999999999] transition-width duration-500 delay-700 ease-out'>
      <div className='relative w-full flex justify-center'>
        <div className='bg-[#fff] rounded-[10px] absolute top-[10em] flex flex-col min-w-[450px] mx-auto min-h-[153px] px-[16px] shadow-md pt-[16px]'> 
          <div className='flex justify-between mb-[10px]'>
              <div className='flex flex-col gap-[20px]'>
                <input onChange={(e) => setFormData({...formData, taskName: e.target.value})} type="text" value={formData.taskName} placeholder='Task Name' className='o outline-none'/>
                <input onChange={(e) => setFormData({...formData,  desc: e.target.value})} type="text" value={formData.desc} placeholder='Description' className='o outline-none'/>
              </div>
              <div className='min-h-full flex items-end pb-[4px]'>
                <span className='flex animate-ping h-[8px] w-[8px] bg-[#1ed2bd] rounded-full '/>
              </div>
              
          </div>
          <div className='flex flex-col'>
           
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

          <div className='flex flex-col items-start justify-start mt-[30px]'>
            <span>Date</span>
            {ButtonTitles.map((title) => (
            <Button handleOnChange={handleOnChangeButton} value='' btnType='Date' key={title} title={title} btnStyles='min-w-[88.72px] mt-[10px] h-[28px] py-[15px] px-[10px] rounded-sm border-[2px] border-[#c8f4ee]'/>
          ))}
          </div>
          
            <hr className='block my-[30px]'/>
            <div className='flex gap-[15px] justify-end pb-[30px]'>
                <button onClick={close}>
                  Cancel
                </button>
                <button onClick={handleTodo} className='bg-[#1ed2bd] py-[10px] px-[10px] rounded-[10px] text-[#fff]'>
                  {isLoading ? "Saving" : "Add Task"}
                </button>
            </div>
          </div>
       </div>
      </div>
       
    </div>
  )
}

export default AddTaskModal