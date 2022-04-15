import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  //Add Task
  const handleAddTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    task.check = false;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, check: !task.check } : task
      )
    );
  };
  return (
    <div className="container">
      <Header addTask={handleAddTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show at the moment"
      )}
    </div>
  );
};
export default App;
