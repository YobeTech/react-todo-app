import React, {useState} from 'react'
import TodoList from './containers/TodoList'
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        TODO APP
       </div>
       <div>
        <TodoList/>
       </div>
    </div>
  );
}

export default App;
