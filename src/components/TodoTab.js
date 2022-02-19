import React from 'react'
import TodoList from './TodoList'

const TodoTab = (props) => {

  const {value, label, onTabClick, isActive} = props;

  return (
      <div>
        <li className="nav-item">
            <a className={isActive ? "nav-link active" : "nav-link"}
               onClick={()=>onTabClick(value)} 
             aria-current="page" href="#">{label}</a>
        </li>
     </div>
  )
}

export default TodoTab