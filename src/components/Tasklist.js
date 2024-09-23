import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { CardFooter } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { deletetask, edittask } from '../Redux/Action';
function Tasklist() {
    const dispatch=useDispatch()
    const tasks = useSelector(state => state.tasks)
    console.log(tasks );
    
    const editing = useSelector(state => state.editing)
    return (
        <div>
            {tasks.map(task =>
                <Card style={{ width: '18rem', background: task.iscomplete === true ? "green" : "#D2691E" }}>
                    <Card.Body>
                        <Card.Title>{task.name}</Card.Title>
                        <Card.Text>
                            {task.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button onClick={()=>dispatch(deletetask(task.id))}>DELETE</button>
                        <button onClick={()=>dispatch(edittask(task.id,task))}>UPDATE</button>
                        <button onClick={()=>dispatch(edittask(task.id,{...task,iscomplete:!task.iscomplete}))}>MARK COMPLETED</button>

                    </Card.Footer>
                </Card>
            )}
        </div>
    )
}

export default Tasklist