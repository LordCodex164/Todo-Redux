import {useState} from 'react'
import Button from './common/Button'

interface AddTaskModalProps{
  close: () => void
}

const AddTaskModal = ({close}: AddTaskModalProps) => {

  const ButtonTitles =  ["Due Date", "Priority"]

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    DueDate: new Date(),
    priority: "",
    status: "not started"
  })

  const data = new Date().toISOString();

  console.log(data)
  return (
    <div className='fixed top-0 left-0 right-0 flex h-full bg-[#0618028c] z-[99999999999] transition-width duration-500 delay-700 ease-out'>
      <div className='relative w-full'>
        <div className='bg-[#fff] rounded-[10px] absolute top-[10em] left-[18em] flex flex-col min-w-[450px] mx-auto min-h-[153px] px-[16px] shadow-md pt-[16px]'> 
          <div className='flex justify-between'>
              <div className='flex flex-col '>
                <input type="text" placeholder='Task Name' className='o outline-none'/>
                <input type="text" placeholder='Description' className='o outline-none'/>
              </div>
              <div className='min-h-full flex items-end'>
                <span className='flex animate-ping h-[8px] w-[8px] bg-[#1ed2bd] rounded-full '/>
              </div>
              
          </div>
          <div className='flex flex-col'>
      
          <div className='pl-[20px] gap-[20px] flex justify-start'>
            {ButtonTitles.map((title) => (
            <Button title={title} btnStyles='min-w-[88.72px] mt-[30px] h-[28px] rounded-sm border-[2px] border-[#c8f4ee]'/>
          ))}
          </div>
          
            <hr className='block my-[30px]'/>
            <div className='flex gap-[15px] justify-end pb-[30px]'>
                <button onClick={close}>
                  Cancel
                </button>
                <button className='bg-[#1ed2bd] py-[10px] px-[10px] rounded-[10px] text-[#fff]'>
                  Add Task
                </button>
            </div>
          </div>
       </div>
      </div>
       
    </div>
  )
}

export default AddTaskModal