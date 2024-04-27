import { FaXmark } from 'react-icons/fa6'
import { todosState } from '../store/Todo/actions';
import { deleteTodo } from '../store/Todo/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

interface DeleteTaskPromptProps {
    close: () => void;
    item: todosState;
}

const DeleteTaskPrompt = ({close, item}: DeleteTaskPromptProps) => {

    const [isLoading, setIsloading] = useState(false)

            const dispatch = useDispatch()

    const handleDeleteItem = (id:string) => {
        dispatch(deleteTodo(id))
        setIsloading(true)
        setTimeout(() => {
         setIsloading(false)
         close()
        }, 1000)
        
    }

console.log(item)

  return ( 
    <div className='fixed bg-[#0618028c] top-0 left-0  flex justify-center right-0  h-screen z-[99999]'>
        <div className='relative w-full flex justify-center items-center'>
            
           <div className='bg-[#fff] rounded-[10px] absolute top-[10em]  flex flex-col min-w-[450px] mx-auto min-h-[200px] px-[16px] shadow-md pt-[16px]'>
              
               <h3 className='text-[20px] font-semibold'>Delete Task</h3>
               <span>
                <FaXmark onClick={close} className='absolute top-0 cursor-pointer text-[25px] right-0 pr-[10px] mt-[10px]'/>
               </span>
            <div className='relative flex flex-col py-[10px] items-center mt-[10px]'>
                <span>Are you sure you want to delete this Task</span>
               <button onClick={() => handleDeleteItem(item.id)} className='bg-[#fd9696] p-3 rounded-[10px] mt-[10px] text-[15px] hover:text-[#fff]'>
                 {isLoading ? "Deleting" : "Delete Task"}
               </button>
            </div>
               
           </div>
        </div>
    </div>
  )
}

export default DeleteTaskPrompt