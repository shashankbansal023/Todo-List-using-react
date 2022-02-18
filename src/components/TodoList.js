import React from 'react';
import  TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({list,title , deleteItem=()=>{}, taskToggle=()=>{}, editItem=()=>{}}) =>{

    return (
           
        <div className="todoListContainer">
            <h1 className="todo-list-title">{title}</h1>
            <div className="todo-list">
                {
                     list.map((item, index)=>{
                        return (
                           <TodoItem key={index+1} index={index} 
                           item={item} taskToggle={taskToggle} 
                           deleteItem={deleteItem} 
                           editItem={editItem}/>
                        )
                    })
                }
            </div>
        </div> 
          
    )
}

export default TodoList;
