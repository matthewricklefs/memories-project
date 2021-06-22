export default (posts = [], action) => {
  switch (action.type) {
    // return data from the dispatched action getPosts with a type of 'FETCH_ALL'
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;

    default:
      return posts;
  }
};
