const FETCH_PROJECTS = 'FETCH_PROJECTS';
const CLEAR_PROJECT_DATA = 'CLEAR_PROJECT_DATA';
const axios = require('axios');

const initialState = {
  allProjects: [],
};

export const fetchProjects = () => async dispatch => {
  const res = await axios.get('/api/projects/fetchProjects');
  dispatch({ type: FETCH_PROJECTS, value: res.data.allProjects });
};

export const removeProjects = () => {
  return {
    type: FETCH_PROJECTS,
    value: '',
  };
};

export const createProject = (
  projectTitle,
  projectDescription,
  redirectOnSuccess
) => async dispatch => {
  try {
    const res = await axios('/api/projects/createProject', {
      method: 'post',
      data: { projectTitle, projectDescription },
    });
    if (res.status === 200) {
      const projects = await axios.get('/api/projects/fetchProjects');
      dispatch({ type: FETCH_PROJECTS, value: projects.data });
      redirectOnSuccess();
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const clearProjectData = () => {
  return {
    type: CLEAR_PROJECT_DATA,
    value: initialState.allProjects,
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, allProjects: action.value };
    case CLEAR_PROJECT_DATA:
      return { ...state, allProjects: action.value };
    default:
      return state;
  }
}
