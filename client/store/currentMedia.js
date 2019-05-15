import axios from 'axios'
import socket from '../socket'

//Action Types
const UPDATE_CURRENT_MEDIA = 'UPDATE_CURRENT_MEDIA'

//Action Creators
const updateCurrentMedia = (newProps) => ({
  type: UPDATE_CURRENT_MEDIA,
  newProps
})

//Action Thunks
export const updateCurrentMediaThunk = (newProps) => dispatch => {
  socket.emit('mediaUpdate', newProps)
  console.log('NEW PROPS:', newProps)
  dispatch(updateCurrentMedia(newProps))
}

//inititalState
const initialState = {
  xCoord: null,
  yCoord: null,
  width: null,
  height: null,
  rotation: null
}

//Reducer
// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_CURRENT_MEDIA:
      return {...action.newProps}
     default:
         return state
  }
}
