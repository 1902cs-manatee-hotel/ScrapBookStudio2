import io from 'socket.io-client'
import store from './store/'
import {updateSingleMedia, updateSingleText} from './store/content'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('mediaUpdate', newProps => {
  store.dispatch(updateSingleMedia(newProps))
})

socket.on('textUpdate', newProps => {
  store.dispatch(updateSingleText(newProps))
})

export default socket
