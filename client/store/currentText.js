import axios from 'axios'
import socket from '../socket'

//Action Types
const UPDATE_CURRENT_TEXT = 'UPDATE_CURRENT_TEXT'

//Action Creators
const updateCurrentText = (newProps) => ({
  type: UPDATE_CURRENT_TEXT,
  newProps
})

//Action Thunks
export const updateCurrentTextThunk = (newProps) => dispatch => {
  socket.emit('textUpdate', newProps)
  dispatch(updateCurrentText(newProps))
}

//inititalState
const initialState = {
  xCoord: null,
  yCoord: null,
  content: '',
  size: null
}

//Reducer
// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  const newState = {...state}
  switch(action.type) {
    case UPDATE_CURRENT_TEXT:
      return {...action.newProps}
     default:
         return state
  }
}
