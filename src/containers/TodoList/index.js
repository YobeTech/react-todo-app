import React, {useState} from 'react'
import Button from '../../components/Button'
import TodoListItem from '../../components/TodoListItem';

const CreateTodo = (props) => {
    const [inputValue, setInputValue] = useState('');
    const onValueChange = (event) => {
        event.preventDefault();
        setInputValue(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={onValueChange}/>
            <Button label="Add" onChange={() => {}} />
        </div>
    )
    
};

const TodoList = (props) => {
    const [todos, setTodos] = useState([
        {
            completed: false,
            title: 'Buy Milk',
            id: 1
        },
        {
            completed: false,
            title: 'Go for a run',
            id: 2
        }
    ])
    return (
        <>
            <CreateTodo />
            {
                todos.map((item, index) => {
                    return (
                        <div>
                            <TodoListItem item={item} key={index}/>
                        </div>
                    )
                })
            }
        </>
    )
};

export default TodoList;
