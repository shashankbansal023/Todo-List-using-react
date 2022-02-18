
import React,{useState} from 'react';
import './App.css';
import TodoTabs from './components/TodoTabs'


const App=()=>{

    const [inputText, setInputText] = useState('');
    const [toDoValues,setToDoValues] = useState([]);

    const [completedTasks,setCompletedTasks] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setToDoValues([...toDoValues,{value : inputText, taskCompleted: false}]);
        setInputText('');
    }

    
    function deleteItem(itemIndex,value){

        let incompleteList = [...toDoValues];
        let completeList = [...completedTasks];

        if(incompleteList[itemIndex].value === value){
            incompleteList = incompleteList.filter((_,index)=> index!==itemIndex);
            setToDoValues(incompleteList);
            return;
        }

        completeList = completeList.filter((_,index)=>index!==itemIndex);
        setCompletedTasks(completeList);
    }

    function taskToggle(event,itemIndex){

        if(event.target.textContent==="Done"){
            let incompleteList = [...toDoValues];
            incompleteList[itemIndex]["taskCompleted"]= !incompleteList[itemIndex]["taskCompleted"];
            let completedTask=incompleteList.splice(itemIndex,1);
            setToDoValues(incompleteList);
            setCompletedTasks([...completedTasks,...completedTask]);
            return;
        }

        let completeList = [...completedTasks];
        completeList[itemIndex]["taskCompleted"] = !completeList[itemIndex]["taskCompleted"];
        let incompleteTask = completeList.splice(itemIndex,1);
        setToDoValues([...toDoValues,...incompleteTask]);
        setCompletedTasks(completeList);
       
    }


    function editItem(itemIndex,itemValue){

        let array = [...toDoValues];
        array[itemIndex].value = itemValue;
        setToDoValues(array); 
    }

    const lists = {toDoValues, completedTasks};
    
    return (
        <div className="container"> 
            <h1 className="title" >TODO LIST</h1>
            <form className="todo-form"  onSubmit={handleSubmit}>
                <input className="todoInput" type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} required/>
                <button className="btn btn-secondary" >Add Todo</button>
            </form>
            <div>
            {
                Boolean(toDoValues.length) && 
                <TodoTabs lists={lists} taskToggle={taskToggle} deleteItem={deleteItem} editItem={editItem}/>
            }
            </div>
        </div>
    )
}

export default App;
