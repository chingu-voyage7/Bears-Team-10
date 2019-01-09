const FETCH_POSTS = 'FETCH_POSTS';
// const CLEAR_PROJECT_DATA = 'CLEAR_PROJECT_DATA';
const axios = require('axios');

const initialState = {
  allPosts: [],
};

export const fetchPosts = () => async dispatch => {
  const res = await axios.get('/api/posts/fetchPosts');
  dispatch({ type: FETCH_POSTS, value: res.data.allPosts });
};

// export const removeProjects = () => {
//   return {
//     type: FETCH_PROJECTS,
//     value: '',
//   };
// };

export const newPost = (postContent, redirectOnSuccess) => async dispatch => {
  try {
    const res = await axios('/api/posts/newPost', {
      method: 'post',
      data: { postContent },
    });
    if (res.status === 200) {
      const posts = await axios.get('/api/posts/newPost');
      dispatch({ type: FETCH_POSTS, value: posts.data });
      redirectOnSuccess();
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

// export const clearProjectData = () => {
//   return {
//     type: CLEAR_PROJECT_DATA,
//     value: initialState.allProjects,
//   };
// };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, allPosts: action.value };
    // case CLEAR_PROJECT_DATA:
    //   return { ...state, allProjects: action.value };
    default:
      return state;
  }
}
