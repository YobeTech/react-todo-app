import React, {useState} from 'react'
import Button from './components/Button';
import './App.css';
import Checkbox from './components/Checkbox';

function App() {
  const [checked, setChecked] = useState(false)
  const onButtonClick = () => {
    console.log('Ouch')
  }
  const onCheckboxToggle = (status) => {
    console.log(status)
    setChecked(status);
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        TODO APP
        <Button label="Add" color="Blue" onClick={onButtonClick} />
        <Checkbox onClick={onCheckboxToggle} checked={checked}/>
       </div>
    </div>
  );
}

export default App;
