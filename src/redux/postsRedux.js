//import shortid from 'shortid';

//selectors
export const getAllPosts = state => state.posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const ADD_POST  = createActionName('ADD_POST');

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
    return [...statePart, { ...action.payload}];
    default:
      return statePart;
  };
};

export default postsReducer;