import React,{useState} from 'react';
import './TodoItem.css'

const TodoItem = (props) =>{

    const [editState,setEditState] = useState(false);

    const { item,
     deleteItem=()=>{},
     updatedTodo=()=>{},
    editItem=()=>{} } = props;
    
    const {id,value, isComplete} = item;

    function taskToggle(id){
        item.isComplete = !item.isComplete;
        updatedTodo(id,item);
    }

    return (
        <div className="todoItem-container">
            {
                editState ? <input className="editTodoItem" value={value}  onChange={(e)=>editItem(id, e.target.value)}/>:
                    <div className={`${!isComplete? "todoText" : "todoTextStrike"}`} >{value}</div>
            }
            <button className="btn btn-success complete-btn"  onClick={()=>taskToggle(id)}>{isComplete? "Undone": "Done"}</button>
            <button className="btn btn-danger" onClick={()=>deleteItem(id,value)}>Delete</button>
            {
             !isComplete&&    <button className="btn btn-warning"  
            onClick={()=>setEditState(!editState)}>{!editState ? 'Edit text':'Change text'}</button>
            }
        </div>
    )
}

export default TodoItem;