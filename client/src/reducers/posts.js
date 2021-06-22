export default (posts = [], action) => {
  switch (action.type) {
    // return data from the dispatched action getPosts with a type of 'FETCH_ALL'
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      // spread posts and add new post from the action payload
      return [...posts, action.payload];

    default:
      return posts;
  }
};
