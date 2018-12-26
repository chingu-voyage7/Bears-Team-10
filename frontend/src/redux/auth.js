const FETCH_USER = 'FETCH_USER';
const axios = require('axios');

const initialState = {
  user: { isLoggedIn: false, user: { username: '', id: '' } },
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/auth/status');
  return new Promise((resolve, _reject) => {
    dispatch({ type: FETCH_USER, value: res.data });
    resolve();
  });
};

export const register = (username, password) => async dispatch => {
  try {
    const res = await axios('/api/auth/register', {
      method: 'post',
      data: { username, password },
      withCredentials: true,
    });
    if (res.status === 200) {
      const user = await axios.get('/api/auth/status');
      return new Promise((resolve, _reject) => {
        dispatch({ type: FETCH_USER, value: user.data });
        resolve();
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const login = (username, password) => async dispatch => {
  try {
    const res = await axios('/api/auth/login', {
      method: 'post',
      data: { username, password },
      withCredentials: true,
    });
    if (res.status === 200) {
      const user = await axios.get('/api/auth/status');
      return new Promise((resolve, _reject) => {
        dispatch({ type: FETCH_USER, value: user.data });
        resolve();
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const logout = () => async dispatch => {
  try {
    const res = await axios.get('/api/auth/logout');
    if (res.status === 200) {
      const user = await axios.get('/api/auth/status');
      return new Promise((resolve, _reject) => {
        dispatch({ type: FETCH_USER, value: user.data });
        resolve();
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.value };
    default:
      return state;
  }
}
