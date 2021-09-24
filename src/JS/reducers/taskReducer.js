import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MAKE_DONE,
} from "../constants/taskManager";
const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case EDIT_TASK:
      let result = state.tasks.map((e) =>
        e.id === action.payload.id
          ? {
              ...e,
              discription: action.payload.modifiedTask,
            }
          : e
      );

      return { ...state, tasks: result };

    case MAKE_DONE:
      let arrEdit = state.tasks.map((e) =>
        e.id === action.payload.id
          ? {
              ...e,
              isDone: !e.isDone,
            }
          : e
      );

      return { ...state, tasks: arrEdit };

    case DELETE_TASK:
      let arrDelite = state.tasks.filter((e) => e.id !== action.payload.id);
      return { ...state, tasks: arrDelite };

    // case FILTRE_TASKS:
    //   let filteredTasks = newstate.tasks.filter(
    //     (e) => e.isDone === action.payload
    //   );
    //   let filteredTasksObject = { tasks: filteredTasks };
    //   return filteredTasksObject;
    default:
      return state;
  }
};
export default taskReducer;
