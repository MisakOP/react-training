import { FaTimes} from 'react-icons/fa'
//import Header from './Header';
const Task = ({ task, onDelete,onToggle }) => {
    


    return (
        <div className={`task ${task.check ? 'check' : ''}`}>
            <span>
            <input onChange={(e) => onToggle(task.id)} type="checkbox" />
            {task.text} 
            </span>
            <span>
                <FaTimes 
                style={{
                cursor:'pointer'}} 
                onClick = {() => onDelete(task.id)}/>
            </span>
        </div>
    )
}
export default Task