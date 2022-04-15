 import { useState } from "react";

const Header = ({ addTask}) => {
    // const { name } = userData;

    //let [count, setCount] = useState(0);
    const [newTask, setNewTask] = useState({})
    


    const clickMe = () => {
        if (!newTask.text) {
            return;
        }
        addTask(newTask);
        setNewTask({})
        console.clear();
    }

    const addNewTask = (e) => {
        setNewTask({
            text: e.target.value,
        })
    }
    return (
        <div className="header">
            <input className="input-box" value={newTask?.text || ''} type="text" onChange={e => addNewTask(e)} placeholder="enter the task" />
            <button className="btn" onClick={(e) => clickMe()}> ADD</button>
        </div>
    )
}

export default Header;