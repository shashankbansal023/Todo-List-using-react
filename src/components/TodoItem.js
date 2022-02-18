import React,{useState} from 'react';
import './TodoItem.css'


const TodoItem = (props) =>{


    const [editState,setEditState] = useState(false);

    const { index:id, item,
     deleteItem=()=>{},
     taskToggle=()=>{},
    editItem=()=>{} } = props;
    
    const {value, taskCompleted} = item;

    return (
        <div className="todoItem-container">
            {
                editState ? <input className="editTodoItem" value={value}  onChange={(e)=>editItem(id, e.target.value)}/>:
                    <div className={`${!taskCompleted? "todoText" : "todoTextStrike"}`} >{value}</div>
            }
            <button className="btn btn-success complete-btn"  onClick={(e)=>taskToggle(e,id)}>{taskCompleted? "Undone": "Done"}</button>
            <button className="btn btn-danger" onClick={()=>deleteItem(id,value)}>Delete</button>
            {
             !taskCompleted&&    <button className="btn btn-warning"  
            onClick={()=>setEditState(!editState)}>{!editState ? 'Edit text':'Change text'}</button>
            }
        </div>
    )
}

export default TodoItem;