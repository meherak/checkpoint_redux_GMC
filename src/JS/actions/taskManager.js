import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MAKE_DONE,
  FILTRE_TASKS,
} from "../constants/taskManager";

export const editTask = (modifiedTask, id) => {
  return {
    type: EDIT_TASK,
    payload: { modifiedTask, id },
  };
};
export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const makeDone = (isDone, id) => {
  return {
    type: MAKE_DONE,
    payload: { isDone, id },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const filterTasks = (check) => {
  return {
    type: FILTRE_TASKS,
    payload: check,
  };
};
