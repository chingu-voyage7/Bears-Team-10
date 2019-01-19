const FETCH_COLLABORATORS = 'FETCH_COLLABORATORS';
const CLEAR_COLLABORATOR_DATA = 'CLEAR_COLLABORATOR_DATA';
const axios = require('axios');

const initialState = {
  collaborators: [],
};

export const fetchProjectCollaborators = () => async dispatch => {
  const res = await axios.get('/api/posts/fetchProjectCollaborators');
  dispatch({ type: FETCH_COLLABORATORS, value: res.data.collaborators });
};

export const clearCollaboratorData = () => ({
  type: CLEAR_COLLABORATOR_DATA,
  value: initialState.collaborators,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLLABORATORS:
      return { ...state, collaborators: action.value };
    case CLEAR_COLLABORATOR_DATA:
      return { ...state, collaborators: action.value };
    default:
      return state;
  }
}
