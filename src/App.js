import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [ tasks , setTasks ]= useState([]);

//Add Task
const addTask = (task) =>{
  const id =Math.floor(Math.random() * 10000) + 1;
  task.check =false;
  const newTask = {id,...task};
  setTasks([...tasks,newTask])
}
//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
} 
 
//Toggle Reminder
const toggleReminder = (id) =>{
  console.clear();
  setTasks(
    tasks.map((task) => 
      task.id === id ?
      {...task, check: !task.check} : task 
    )
  )

}
  return (
    <div className="container">
      <Header  addTask={addTask}/>
      {/* {tasks.map(item => <div key={item.id}>{item.text} </div>)} */}
      {tasks.length>0 ? <Tasks tasks = {tasks} onDelete=
      {deleteTask} onToggle = {toggleReminder}/> : 'No Tasks to show'} 
      {/* <Header onAdd={() => setShowAddTask
      (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd =  {addTask}/>}
      */}
    </div>
  )
}
export default App