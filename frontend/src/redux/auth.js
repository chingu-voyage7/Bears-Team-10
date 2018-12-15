const FETCH_USER = 'FETCH_USER'
const axios = require('axios')

const initialState = {
  user: { id: '', name: '' }
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/auth/status')
  dispatch({ type: FETCH_USER, value: res.data })
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.value }
    default:
      return state
  }
}
