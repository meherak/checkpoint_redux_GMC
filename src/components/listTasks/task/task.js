import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  makeDone,
} from "../../../JS/actions/taskManager";

const Task = ({ taskData }) => {
  const dispatch = useDispatch();
  const [hideBtn, sethideBtn] = useState(true);
  const [switchEdit, setswitchEdit] = useState(true);
  const [editedTask, seteditedTask] = useState(taskData.discription);
  const handleEdit = () => {
    setswitchEdit(!switchEdit);
    sethideBtn(!hideBtn);
    if (!switchEdit) {
      dispatch(editTask(editedTask, taskData.id));
    }
  };
  const cancelEdit = () => {
    seteditedTask(taskData.discription);
    sethideBtn(!hideBtn);
    setswitchEdit(!switchEdit);
  };
  return (
    <div>
      {switchEdit ? (
        <h1 style={{ color: taskData.isDone === true ? "green" : null }}>
          {taskData.discription}
        </h1>
      ) : (
        <input
          onChange={(e) => seteditedTask(e.target.value)}
          value={editedTask}
        />
      )}

      <button onClick={handleEdit}>{switchEdit ? "Edit" : "Submit"}</button>
      {!switchEdit ? <button onClick={cancelEdit}>Cancel</button> : null}
      {hideBtn ? (
        <>
          <button
            onClick={() => dispatch(makeDone(taskData.isDone, taskData.id))}
          >
            {taskData.isDone ? "Undone" : "Done"}
          </button>
          <button onClick={() => dispatch(deleteTask(taskData, taskData.id))}>
            Delete
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Task;
