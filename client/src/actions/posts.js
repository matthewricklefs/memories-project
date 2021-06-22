// imports all API calls from the api directory
import * as api from "../api";

// Action Creators: functions that return actions.
// an action is an object that has type and payload
// with redux-thunk, we deal with async logic and dispatch action as opposed to only returning the action
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
