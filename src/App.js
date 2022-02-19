
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
        }
    ]

    const completeList = Object.values(todoList).filter(({isComplete}) => isComplete);
    const incompleteList = Object.values(todoList).filter(({isComplete}) => !isComplete);

    function onTabChange(value){
        setSelectedTab(value);
    }

    function handleSubmit(e){
        e.preventDefault();
        const todoId = new Date().toISOString();
        setTodoList({...todoList,
             [todoId]:{ id : todoId, value : inputText, isComplete: false} });
        setInputText('');
    }

    
    function deleteItem(itemIndex,value){

        // let incompleteList = [...toDoValues];
        // let completeList = [...completedTasks];

        // if(incompleteList[itemIndex].value === value){
        //     incompleteList = incompleteList.filter((_,index)=> index!==itemIndex);
        //     setToDoValues(incompleteList);
        //     return;
        // }

        // completeList = completeList.filter((_,index)=>index!==itemIndex);
        // setCompletedTasks(completeList);
    }

    function updateTodo(id,updatedItem){
        setTodoList({...todoList, [id]:updatedItem});
    }


    function editItem(itemIndex,itemValue){

        // let array = [...toDoValues];
        // array[itemIndex].value = itemValue;
        // setToDoValues(array); 
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
                    <TodoList  list={incompleteList} deleteItem={deleteItem} editItem={editItem} updatedTodo={updateTodo}/>
                )
            }
            {
                selectedTab===TODO_TABS.COMPLETE && (
                    <TodoList list={completeList} deleteItem={deleteItem} editItem={editItem} updatedTodo={updateTodo}/>
                )
            }
            </div>
        </div>
    )
}

export default App;
