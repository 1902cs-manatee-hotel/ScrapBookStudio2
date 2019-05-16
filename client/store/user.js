import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const initialState = {
  user: {}
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method, firstName, lastName) => async dispatch => {
  let res
  console.log('email, password, method, firstName, lastName ', email, password, method, firstName, lastName)
  try {

      res = await axios.post(`/auth/${method}`, {email, password, firstName, lastName})

    console.log('RESPONSE', res)
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const sendScrapbookThunk = (scrapbookid, pageid, email) => dispatch => {
  try {
    axios.post('/api/users/sendscrapbook', {scrapbookid, pageid, email} )
    // dispatch(getUser(res.data || initialState))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return 'User Deleted'
    default:
      return state
  }
}
