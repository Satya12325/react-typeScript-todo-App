import React from 'react';
import './App.css';
import InputField from './Components/InputFilled';
import {useState} from "react"
import {Todo} from "./Modal"
import { isDefaultClause } from 'typescript';


const  App: React.FC = () => {

    const [todo,setTodo] = useState<string>("")
    const [data,setData] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setData([...data,{id:Date.now(),todo,isDone:false}]);
      setTodo("")
    }
  }

  console.log(todo)

  return (
    <div className="App">
     <h1 className="heading">Todo App</h1>
     <InputField
     todo={todo}
     setTodo={setTodo}
     handleAdd={handleAdd}
     />
     {
      data.map((data) =>
      
        <div>
          {data.todo}
        </div>
      
      )
     }
    </div>
  );
}

export default App;
