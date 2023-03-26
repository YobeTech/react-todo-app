import Checkbox from '../Checkbox';
import Button from '../Button';
/** 
 * {
 *  completed: boolean
 *  title: string
 *  id: number
 * }
*/
const TodoListItem = (props) => {
    const {item} = props;
    
    return (
        <div className="TodoListItem">
            <Checkbox checked={item.completed} onClick={() => {}}/>
            <span>{item.title}</span>
            <span>
                <Button color="#008CBA" label="Edit" onClick={() =>{}} />
                <Button color="#f44336" label="Delete" onClick={() => {}}/>
            </span>
        </div>
    );
}

export default TodoListItem;