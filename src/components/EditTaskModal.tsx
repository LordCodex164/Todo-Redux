import {useState} from 'react'
import { FaXmark } from 'react-icons/fa6'
import { todosState, editTodo } from '../store/Todo/actions';
import { useDispatch } from 'react-redux';

interface EditTaskModalProps {
    close: () => void;
    item: todosState;
}

const EditTaskModal = ({close, item}: EditTaskModalProps) => {

  const dispatch = useDispatch()


  const [editedName, setEditedName] = useState<string>(item.taskName)

  const [isLoading, setIsloading] = useState(false)

  const [disabled, setDisabled] = useState(true)

  const handleEditTasKName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value)
    setDisabled(false)
  } 

  const handleEdit = () => {
    const data = {
      id: item.id,
      taskName: editedName,
      desc: item.desc,
      dueDate: item.dueDate,
      status: item.status
    }
    const action = dispatch(editTodo(item.id, data))
    setIsloading(true)
    if(action) {
      setTimeout(() => {
       setIsloading(false)
       close()
      }, 1000)
    }
  }

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-center h-full bg-[#0618028c] z-[99999999999] transition-width duration-500 delay-700 ease-out'>
        <div className='relative w-full flex justify-center'>
           <div className='bg-[#fff] rounded-[10px] absolute top-[10em]  flex flex-col min-w-[450px] mx-auto overflow-y-auto px-[16px] py-[20px] shadow-md pt-[16px]'>
             <h3>Edit</h3>
               <span>
                <FaXmark onClick={close} className='absolute cursor-pointer text-[25px] top-3 right-0 pr-[10px]'/>
               </span>
              <form>
                <div className='flex flex-col gap-[24px] mt-[20px]'>
                 <div className='flex flex-col'>
                    <label htmlFor="" className='text-[#1ed2bd]'>
                        Task Name
                    </label>
                    <input onChange={(e) => handleEditTasKName(e)} type="text" placeholder='' className='relative mt-[10px] p-[5px] shadow-md border-[1.2px] border-[#403e56] border-dashed' value={editedName}/>
                 </div>

                    <button type='button' className='cursor-pointer border border-[#1ed2bd] self-center px-[10px] py-[8px]' onClick={handleEdit} disabled={disabled}>
                      {isLoading ? "Saving" : "Save"}
                    </button>
                </div>
              </form>
           </div>
        </div>
    </div>

  )
}

export default EditTaskModal