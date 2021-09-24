import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTasks } from "../../JS/actions/taskManager";

const AddTasks = () => {
  const [newTask, setnewTask] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    if (newTask !== "") {
      dispatch(
        addTask({ discription: newTask, id: Math.random(), isDone: false })
      );
    } else alert("You must write a task");

    setnewTask("");
  };

  const handleFilter = (check) => {
    dispatch(filterTasks(check));
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setnewTask(e.target.value)}
        value={newTask}
      />

      <button onClick={handleAdd}>Add Task</button>
      <button onClick={() => handleFilter(true)}>Filtre Done</button>
      <button onClick={() => handleFilter(false)}>Filtre UnDone</button>
      <button onClick={() => handleFilter(null)}>All Tasks</button>
    </div>
  );
};

export default AddTasks;
