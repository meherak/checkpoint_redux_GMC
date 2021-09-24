// const isDone = true;
import { FILTRE_TASKS } from "../constants/taskManager";
const initilstate = null;
const checkReducer = (state = initilstate, action) => {
  switch (action.type) {
    case FILTRE_TASKS:
      return action.payload;
    default:
      return state;
  }
};
export default checkReducer;
