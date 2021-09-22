import { ADD_TASK, EDIT_TASK, MAKE_DONE } from "../constants/taskManager";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case EDIT_TASK:
      state.tasks.description = action.payload;

      return state;

    case MAKE_DONE:
      return (state.tasks.isDone = true);

    default:
      return state;
  }
};
export default taskReducer;
