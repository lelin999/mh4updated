import { ADD_SPEEDRUN, DELETE_SPEEDRUN } from "../constants.js";

const speedrun = (action) => {
  let { speedrun } = action;
  return {
    id: '',
    submitted_by: '',
    duration: '',
    hunters: '',
    quest_id: ''
  }
}

const removeSpeedrunById = (state = [], id) => {
  const speedruns = state.filter(speedrun => speedrun.id !== id);
  return speedruns;
}

const speedruns = (state = [], action) => {
  let speedruns = null;
  switch(action.type) {
    case ADD_SPEEDRUN: 
      speedruns = [...state, speedrun(action)];
      return speedruns;
    case DELETE_SPEEDRUN:
      speedruns = removeSpeedrunById(state, action.id);
      return speedruns;
    default:
      return state;
  }
}

export default speedruns;