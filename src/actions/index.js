import { ADD_SPEEDRUN, DELETE_SPEEDRUN } from "../constants.js";

export const addSpeedrun = (submitted_by, duration, hunters, quest_id) => {
  const action = {
    type: ADD_SPEEDRUN,
    submitted_by,
    duration,
    hunters,
    quest_id
  }
  return action;
}

export const deleteSpeedrun = (id) => {
  const action = {
    type: DELETE_SPEEDRUN,
    id
  }
  return action;
}