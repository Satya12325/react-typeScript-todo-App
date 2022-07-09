import React from 'react';
import './App.css';
import InputField from './Components/InputFilled';




const  App: React.FC = () => {
  return (
    <div className="App">
     <h1 className="heading">Todo App</h1>
     <InputField/>
     
    </div>
  );
}

export default App;
