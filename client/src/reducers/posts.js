import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case CREATE:
      // spread posts and add new post from the action payload
      return [...posts, action.payload];

    // return data from the dispatched action getPosts with a type of 'FETCH_ALL'
    case FETCH_ALL:
      return action.payload;

    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    default:
      return posts;
  }
};
