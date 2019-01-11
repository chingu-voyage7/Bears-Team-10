const FETCH_POSTS = 'FETCH_POSTS';
const CLEAR_POST_DATA = 'CLEAR_POST_DATA';
const axios = require('axios');

const initialState = {
  allPosts: [],
};

export const fetchPosts = () => async dispatch => {
  const res = await axios.get('/api/posts/fetchPosts');
  dispatch({ type: FETCH_POSTS, value: res.data.allPosts });
};

export const removePosts = () => ({
  type: FETCH_POSTS,
  value: '',
});

export const newPost = (
  postContent,
  projectId,
  redirectOnSuccess
) => async dispatch => {
  try {
    const res = await axios('/api/posts/newPost', {
      method: 'post',
      data: { postContent, projectId },
    });
    if (res.status === 200) {
      const posts = await axios.get('/api/posts/fetchPosts');
      dispatch({ type: FETCH_POSTS, value: posts.data });
      redirectOnSuccess();
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const clearPostData = () => ({
  type: CLEAR_POST_DATA,
  value: initialState.allPosts,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, allPosts: action.value };
    case CLEAR_POST_DATA:
      return { ...state, allPosts: action.value };
    default:
      return state;
  }
}
