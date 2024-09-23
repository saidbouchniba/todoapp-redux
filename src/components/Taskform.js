import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtask, edittask } from '../Redux/Action'

function Taskform() {
    const dispatch = useDispatch()
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const editing = useSelector(state => state.editing)
    console.log(editing);
    const handlesubmit = (event) => {
        event.preventDefault()
        if (!editing) {
            const data = { name, description, id: Date.now(), iscomplete: false }
            dispatch(addtask(data))  
        }
        else{
            const data = { ...editing , name , description }
            dispatch(edittask(editing.id,data))
        }
       
    }
   
    
    return (
        <div>
            <form>
                <input defaultValue={editing?.name} onChange={(event) => setname(event.target.value)} type='text' placeholder='name of the task' />
                <input defaultValue={editing?.description} onChange={(event) => setdescription(event.target.value)} type='text' placeholder='description of the task' />
                <button onClick={handlesubmit}>{editing?"update task":"ADD TASK"}</button>
            </form>

        </div>
    )
}

export default Taskform