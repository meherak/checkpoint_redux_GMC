import { ADD_TASK, EDIT_TASK, MAKE_DONE } from "../constants/taskManager";

export const editTask = (modifiedTask) => {
  return {
    type: EDIT_TASK,
    playload: modifiedTask,
  };
};
export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    playload: newTask,
  };
};

export const makeDone = (isDone) => {
  return {
    type: MAKE_DONE,
    playload: isDone,
  };
};
