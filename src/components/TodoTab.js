import React from 'react'
import TodoList from './TodoList'

const TodoTab = (props) => {
    const {showList ,lists , deleteItem, editItem, taskToggle} = props;
    const { toDoValues, completedTasks}= lists;

  return (
      <div>
    {
       !showList ? 
        <TodoList title="Incomplete List" list={toDoValues} deleteItem={deleteItem} taskToggle={taskToggle} editItem={editItem}/>
        : <TodoList title="Complete List" list={completedTasks} deleteItem={deleteItem} taskToggle={taskToggle} editItem={editItem}/>
    }
     </div>
  )
}

export default TodoTab