import React from 'react';
import  TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({list=[], updatedTodo=()=>{}}) =>{

    return (       
        <div className="todoListContainer">
            <div className="todo-list">
                {
                    list.length ===0 ? <div>No tasks found</div>:
                     list.map((item, index)=>{
                        return (
                           <TodoItem key={index+1} 
                           item={item} 
                           updatedTodo={updatedTodo} 
                           />
                        )
                    })
                }
            </div>
        </div> 
          
    )
}

export default TodoList;
