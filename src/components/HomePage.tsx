import {useEffect, useState} from 'react'
import AddTaskModal from './AddTaskModal'
import { FaEdit } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { CgAddR } from 'react-icons/cg'
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { todosState, toggleTodo, unToggleTodo } from '../store/Todo/actions'
import EditTaskModal from './EditTaskModal'
import DeleteTaskPrompt from './DeleteTaskPrompt'

const HomePage = () => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [showEditModal, setShowEditModal] = useState<boolean>(false)
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [item, setItem] = useState<todosState | null>(null)
  const [todoState, setTodoState] = useState<todosState[]  | []>([])
  const [searchVal, setSearchVal] = useState("")

  const todos = useSelector((state:any) => state.todos.todos)

  const dispatch = useDispatch()

  const handleToggle = (i:number) => {
  if(todos[i].status === "not started") {
    dispatch(toggleTodo(i))
  }
  else {
   dispatch(unToggleTodo(i))
  }
  }

  const handleShowEdit = (item: todosState) => {
    setShowEditModal(true)
    setItem(item)
  }

  const handleDelete = (item: todosState) => {
    setShowDeleteModal(true)
    setItem(item)
  }

  const handleSearch = () => { 
    if(searchVal !== "") {
     const filtItems = todoState.filter((item) => item.taskName.toLowerCase().includes(searchVal.toLowerCase()))
     setTodoState(filtItems)
      return;
    }
    else {
      setTodoState(todos)
    }
  }

  useEffect(() => {
     if(localStorage.getItem("todos")) {
      const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos") as string) : []
     setTodoState(todos.todos.todos ? todos.todos.todos : [])
     }
     console.log("nill")
  }, [todos])
  

  return (
    <div className='relative w-full'>
       
        <div className='px-[20px]'>
            <div className='flex bottom-10 justify-between pt-[40px] w-full'>
               <span>Todo-App</span>
               <button className='relative flex flex-row gap-[10px] items-center  border-[1.7px] border-[#403e56] border-dashed py-[10px] px-[10px] cursor-pointer' onClick={() => setShowModal(true)}>
                 Create Task <CgAddR />
               </button>
            </div>
            <div className='bg-[#8FE1D7] shadow-md whitespace-[5px] text-[#fff8f8] min-h-[200px] px-[30px] py-[20px] mt-[6em]'>
                Search Your Tasks
                <div className='w-full flex flex-col'>
                  <div className='flex min-w-[350px] justify-center mx-auto mt-[10px]'>
                    <input onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder='Search' className='placeholder:text-sm pl-[10px] text-[#000] w-full py-[5px] outline-none'/>
                    <button onClick={handleSearch} className='bg-[#1ed2bd] px-[20px] py-[12px] '><FaSearch/></button>
                  </div>

                  <div className='flex flex-col w-full mt-[10px]'>
                    <p>Tasks List</p>
                    <ul className='text-center'>
                      {todoState?.length > 0 || todoState.length  ? todoState?.map((item:any, i:number) => (
                        <li className='bg-[#fff] py-[12px] flex items-center justify-around mx-auto  max-w-[350px]'>
                          <input onClick={() => handleToggle(i)} type="checkbox" name="" id="" />
                          <span className={`text-[#000] stroke-lime-500 ${item.status === "Completed" && "line-through"}`}>{item.taskName}</span>
                          <span onClick={() => handleShowEdit(item)} className='text-green-400 cursor-pointer'><FaEdit/></span>
                          <span onClick={() => handleDelete(item)} className='text-red-500 text-[18px] cursor-pointer'><MdDelete/></span>
                        </li>
                      )): 
                       <span className='text-[#000] text-center w-full'>
                         No Tasks Avaliable
                        </span>
                        }
                      
                    </ul>
                  </div>
                </div>
            </div>
        </div>

        {showModal && <AddTaskModal close={() => setShowModal(false)}/>}
        {showEditModal && <EditTaskModal item={item as todosState} close={() => setShowEditModal(false)}/>}
        {showDeleteModal && <DeleteTaskPrompt item={item as todosState} close={() => setShowDeleteModal(false)}/>}
    </div>
  )
}

export default HomePage