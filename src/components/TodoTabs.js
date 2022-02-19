import React,{useState} from 'react'
import TodoTab from './TodoTab';
import './Todotabs.css'

const TodoTabs = (props) => {

    const {lists,deleteItem , editItem,taskToggle} = props;
    // when showList is true , show complete list , otherwise show incomplete list
  
    const [showList,setShowList] = useState(false);
  
    return (
    <div className="todoTabsContainer"> 
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className={`nav-link ${!showList ? 'active' :''}`} onClick={()=>setShowList(false)} aria-current="page" href="#">Incomplete List</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${showList ? 'active' :''}`} onClick={()=>setShowList(true)} aria-current="page" href="#">Complete List</a>
            </li>
        </ul>
        <TodoTab showList={showList} lists={lists} deleteItem={deleteItem} editItem={editItem} taskToggle={taskToggle}/>
        
    </div>
      )
}

export default TodoTabs