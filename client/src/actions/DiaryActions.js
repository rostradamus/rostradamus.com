import { DIARY_ACTION_TYPES } from "./actionTypes";
import moment from "moment";

const mockEvents = [
  {
    id: 1,
    title: "Sample Event 1",
    start: moment(),
    end: moment(),
    allDay: true,
    content: "Sample Event 1"
  }, {
    id: 2,
    title: "Sample Event 2",
    start: moment().add(1, "day"),
    end: moment().add(1, "day"),
    allDay: true,
    content: "Sample Event 2"
  }, {
    id: 3,
    title: "Sample Event 3",
    start: moment().add(2, "day"),
    end: moment().add(2, "day"),
    allDay: true,
    content: "Sample Event 3"
  }, {
    id: 4,
    title: "Sample Event 4",
    start: moment().add(3, "day"),
    end: moment().add(3, "day"),
    allDay: true,
    content: "Sample Event 4"
  }
];
export const fetchDiaries = () => {
  return async dispatch => {
    dispatch({
      type: DIARY_ACTION_TYPES.FETCH_REQUEST
    });
    try {
      // res = await axios.get("/api/posts");
      dispatch({
        type: DIARY_ACTION_TYPES.FETCH_SUCCESS,
        payload: {
          items: mockEvents
        }
      });
    } catch (err) {
      dispatch({
        type: DIARY_ACTION_TYPES.FETCH_FAILURE,
        payload: {
          err: err.message
        }
      });
    }
  };
};

export const addDiary = data => {
  return async dispatch => {
    dispatch({
      type: DIARY_ACTION_TYPES.ADD_REQUEST
    });
    try {
      // res = await axios.get("/api/posts");
      dispatch({
        type: DIARY_ACTION_TYPES.ADD_SUCCESS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: DIARY_ACTION_TYPES.ADD_FAILURE,
        payload: {
          err: err.message
        }
      });
    }
  };
};
