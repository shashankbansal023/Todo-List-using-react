import React,{useState} from 'react';
import './TodoItem.css'

const TodoItem = (props) =>{

    const [editState,setEditState] = useState(false);

    const { item,
     updatedTodo=()=>{}
     } = props;
    
    const {id,value, isComplete,isArchived} = item;

    function taskToggle(id){
        item.isComplete = !item.isComplete;
        updatedTodo(id,item);
    }

    function deleteItem(id){
        item.isDelete = !item.isDelete;
        updatedTodo(id,item);
    }

    function sendToArchive(id){
        item.isArchived = !item.isArchived;
        updatedTodo(id,item);
    }

    function editItem(event,id){
        item.value = event.target.value;
        updatedTodo(id,item); 
    }

    return (
        <div className="todoItem-container">
            {
                editState ? <input className="editTodoItem" value={value}  onChange={(e)=>editItem(e,id)}/>:
                    <div className={`${!isComplete? "todoText" : "todoTextStrike"}`} >{value}</div>
            }
            <div className="button-container">
            {
               !isArchived && 
               <button className="btn btn-success complete-btn"  onClick={()=>taskToggle(id)}>{isComplete? "Undone": "Done"}</button>
           } 
            <button className="btn btn-danger" onClick={()=>deleteItem(id,value)}>Delete</button>
            {
             (!isComplete && !isArchived)&&    <button className="btn btn-warning"  
            onClick={()=>setEditState(!editState)}>{!editState ? 'Edit text':'Change text'}</button>
            }
            {
             !isArchived &&  <button className="btn btn-info" onClick={()=>sendToArchive(id)}>Archive</button>
            }
            
            </div>
          
        </div>
    )
}

export default TodoItem;