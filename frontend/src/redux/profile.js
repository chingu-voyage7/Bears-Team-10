const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
const axios = require('axios');

const initialState = {
  profile_picture: [],
  display_name: '',
  username: '',
  bio: '',
  interests: '',
  github: '',
};

export const fetchUserProfile = () => async dispatch => {
  const res = await axios.get('/api/users/getUser');
  return new Promise((resolve, _reject) => {
    dispatch({
      type: FETCH_USER_PROFILE,
      value: res.data,
    });
    resolve();
  });
};

export const updateUserProfile = (key, value) => async dispatch => {
  console.log('redux store');
  console.log('key');
  console.log(key);
  console.log('value');
  console.log(value);
  const res = await axios.put('/api/users/updateUserProfile');
  return new Promise((resolve, _reject) => {
    dispatch({
      type: UPDATE_USER_PROFILE,
      value: res.data,
    });
    resolve();
  });
};

// export const register = (username, password) => async dispatch => {
//   try {
//     const res = await axios('/api/auth/register', {
//       method: 'post',
//       data: { username, password },
//       withCredentials: true,
//     });
//     if (res.status === 200) {
//       const user = await axios.get('/api/auth/status');
//       return new Promise((resolve, _reject) => {
//         dispatch({ type: FETCH_USER, value: user.data });
//         resolve();
//       });
//     }
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      const obj = Object.keys(state);
      const test = {};
      obj.forEach(x => {
        if (action.value.currentUser[x]) {
          test[x] = action.value.currentUser[x];
        }
      });
      return { ...state, ...test };
    case UPDATE_USER_PROFILE:
      return { ...action.value.currentUser };
    default:
      return state;
  }
}
