import { ADD_EVENT } from "../constant/ActionType.js";

const initialList = () => {
  const list = localStorage.getItem("event-list");
  let event = [];
  if (list) {
    event = JSON.parse(list);
  }
  return event;
};
const initialState = {
  eventList: initialList(),
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT: {
      localStorage.setItem(
        "event-list",
        JSON.stringify([...state.eventList, action.data])
      );
      return {
        ...state,
        eventList: [...state.eventList, action.data],
      };
    }

    default:
      return state;
  }
};
