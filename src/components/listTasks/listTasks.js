import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task/Task";

const ListTasks = () => {
  const taskList = useSelector((state) => state.taskReducer.tasks);
  const doneFilter = useSelector((state) => state.checkReducer);
  console.log(doneFilter);

  return (
    <div>
      {doneFilter === true || doneFilter === false
        ? taskList
            .filter((e) => e.isDone === doneFilter)
            .map((e) => <Task taskData={e} key={e.id} />)
        : taskList.map((e) => <Task taskData={e} key={e.id} />)}
    </div>
  );
};

export default ListTasks;
