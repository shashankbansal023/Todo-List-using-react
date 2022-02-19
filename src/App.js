import React,{useState} from 'react';
import './App.css';
import TodoTabs from './components/TodoTabs'
import * as globalConstants from './constants';
import TodoList from './components/TodoList'


const {TODO_TABS} = globalConstants;

const App=()=>{

    const [inputText, setInputText] = useState('');
    const [todoList,setTodoList] = useState({});
    const [selectedTab, setSelectedTab] = useState(TODO_TABS.TODO);

    const tabs =[
        {
            label : TODO_TABS.TODO,
            value : TODO_TABS.TODO
        },
        {
            label : TODO_TABS.COMPLETE,
            value : TODO_TABS.COMPLETE
        },
        {
            label :TODO_TABS.ARCHIVED,
            value : TODO_TABS.ARCHIVED
        }
    ]

    const completeList = Object.values(todoList).filter(({isComplete,isDelete,isArchived}) => isComplete && !isDelete && !isArchived);
    const incompleteList = Object.values(todoList).filter(({isComplete,isDelete,isArchived}) => !isComplete && !isDelete && !isArchived);

    const archivedList = Object.values(todoList).filter(({isArchived,isDelete})=> isArchived&&!isDelete);

    function onTabChange(value){
        setSelectedTab(value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const todoId = new Date().toISOString();
        setTodoList({...todoList,
             [todoId]:
             { id : todoId,
                 value : inputText,
                  isComplete: false, 
                  isDelete : false,
                isArchived : false}});
        setInputText('');
    }

    

    function updateTodo(id,updatedItem){
        setTodoList({...todoList, [id]:updatedItem});
    }
    
    return (
        <div className="container"> 
            <h1 className="title" >TODO LIST</h1>
            <form className="todo-form"  onSubmit={handleSubmit}>
                <input className="todoInput" type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} required/>
                <button className="btn btn-secondary" >Add Todo</button>
            </form>
            <div>
                <TodoTabs tabs={tabs} selectedTab={selectedTab} onTabClick={onTabChange} />
            {
                (selectedTab === TODO_TABS.TODO) && (
                    <TodoList  list={incompleteList} updatedTodo={updateTodo}/>
                )
            }
            {
                selectedTab===TODO_TABS.COMPLETE && (
                    <TodoList list={completeList} updatedTodo={updateTodo}/>
                )
            }
            {
                selectedTab===TODO_TABS.ARCHIVED && (
                    <TodoList list={archivedList} updatedTodo={updateTodo}/>
                )
            }
            </div>
        </div>
    )
}

export default App;
