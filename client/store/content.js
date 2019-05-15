import axios from 'axios'
import socket from '../socket'

/**
 * ACTION TYPES
 */

const GET_PAGE_CONTENT = 'GET_PAGE_CONTENT'

const GET_SINGLE_TEXT = 'GET_SINGLE_TEXT'
const UPDATE_SINGLE_TEXT = 'UPDATE_SINGLE_TEXT'
const CREATE_SINGLE_TEXT = 'CREATE_SINGLE_TEXT'
const DELETE_SINGLE_TEXT = 'DELETE_SINGLE_TEXT'
const GET_EDITOR_TEXT = 'GET_EDITOR_TEXT'

const GET_SINGLE_MEDIA = 'GET_SINGLE_MEDIA'
const UPDATE_SINGLE_MEDIA = 'UPDATE_SINGLE_MEDIA'
const CREATE_SINGLE_MEDIA = 'CREATE_SINGLE_MEDIA'
const DELETE_SINGLE_MEDIA = 'DELETE_SINGLE_MEDIA'

const DESELECT_CANVAS_ELEMENT = 'DESELECT_CANVAS_ELEMENT'

/**
 * ACTION CREATORS
 */


 const getPageContent = (pageText, pageMedia) => ({
   type: GET_PAGE_CONTENT,
   pageText,
   pageMedia
 })

 export const getSingleText = (id) => ({
     type: GET_SINGLE_TEXT,
     id
 })

 export const updateSingleText = (text) => ({
     type: UPDATE_SINGLE_TEXT,
     text
 })

 const createSingleText = (text) => ({
     type: CREATE_SINGLE_TEXT,
     text
 })

 const deleteSingleText = (id) => ({
     type: DELETE_SINGLE_TEXT,
     id
 })

 export const getSingleMedia = (id) => ({
     type: GET_SINGLE_MEDIA,
     id
 })

 export const updateSingleMedia = (media) => ({
     type: UPDATE_SINGLE_MEDIA,
     media
 })

 const createSingleMedia = (media) => ({
     type: CREATE_SINGLE_MEDIA,
     media
 })

 const deleteSingleMedia = (id) => ({
     type: DELETE_SINGLE_MEDIA,
     id
 })

 export const getEditorText = (content) => ({
      type: GET_EDITOR_TEXT,
      content
 })

 export const deselectCanvasElement = () => ({
   type: DESELECT_CANVAS_ELEMENT
 })

 //Thunks
 export const getPageContentThunk = (id) => async dispatch => {
  try {
    // console.log('PAGE ID:', id)
    const {data} = await axios.get(`/api/pages/${id}`)
    const canvas_texts = data.text
    const media = data.media
    console.log('THUNK TEXT',canvas_texts)
    console.log('ID', id)
    dispatch(getPageContent(canvas_texts, media))
  } catch (err) {
    console.error(err)
  }
}

export const createSingleTextThunk = (pageId, content) => async dispatch => {
  try {
    const {data} = await axios.post('/api/canvastext', {pageId, content})
    dispatch(createSingleText(data))
  } catch (err) {
    console.log(err)
  }
}

export const updateSingleTextThunk = (id, updatedProp) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/canvastext/${id}`, updatedProp)
    dispatch(updateSingleText(data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteSingleTextThunk = id => async dispatch => {
  try {
    await axios.delete(`/api/canvastext/${id}`)
    dispatch(deleteSingleText(id))
  } catch (err) {
    console.error(err)
  }
}

export const createSingleMediaThunk = obj => async dispatch => {
  // console.log('obj from content.js', obj)
  try {
    const {data} = await axios.post('/api/media', obj)
    console.log('D*****ATA', data)
    // console.log('HELLO FROM THUNK')
    dispatch(createSingleMedia(data))
  } catch (err) {
    console.log(err)
  }
}

export const createSingleCloudMediaThunk = obj => async dispatch => {
  // console.log('obj from content.js', obj)
  try {
    const {data} = await axios.post('/api/media/cloudinary', obj)
    console.log('D*****ATA', data)
    // console.log('HELLO FROM THUNK')
    dispatch(createSingleMedia(data))
  } catch (err) {
    console.log(err)
  }
}

export const updateSingleMediaThunk = (id, updatedProp) => async dispatch => {
      try {
          const {data} = await axios.put(`/api/media/${id}`, updatedProp)
          dispatch(updateSingleMedia(data))
          // socket.emit('mediaUpdate', data)
      } catch (err) {console.log(err)}
}

export const getSingleMediaThunk = id => async dispatch => {
  try {
    console.log('Id in get single media thunk', id)
    const {data} = await axios.post(`/api/media/${id}`)
    dispatch(getSingleMedia(data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteSingleMediaThunk = id => async dispatch => {
  try {
    await axios.delete(`api/media/${id}`)
    dispatch(deleteSingleMedia(id))
  } catch (err) {
    console.error(err)
  }
}

export const increaseFontSizeThunk = id => async dispatch => {
  try {
    // console.log('from thunk', id)
    const {data} = await axios.put(`api/canvastext/increase/${id}`)
    // console.log('data from thunk', data)
    dispatch(updateSingleText(data))
  } catch (err) {
    console.error(err)
  }
}

export const decreaseFontSizeThunk = id => async dispatch => {
  try {
    const {data} = await axios.put(`api/canvastext/decrease/${id}`)
    dispatch(updateSingleText(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * INITIAL STATE
 */
const initialState = {
    allText: [],
    selectedText: '',
    allMedia: [],
    selectedMedia: 0,
    editorText: ''
}

//Reducer
// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  const newState = {...state}
  switch (action.type) {
    case GET_PAGE_CONTENT:
      newState.allText = action.pageText
      newState.allMedia = action.pageMedia
      return newState
    case GET_SINGLE_TEXT:
      newState.selectedText = action.id
      return newState
    case GET_EDITOR_TEXT:
      newState.editorText = action.content
      return newState
    case CREATE_SINGLE_TEXT:
      newState.allText = [...newState.allText, action.text]
      newState.selectedText = action.text.id
      return newState
    case UPDATE_SINGLE_TEXT:
      newState.allText = [
        ...newState.allText.filter(text => text.id !== action.text.id),
        action.text
      ]
      return newState
    case DELETE_SINGLE_TEXT:
      newState.allText = newState.allText.filter(text => text.id !== action.id)
      newState.selectedText = ''
      return newState
    case GET_SINGLE_MEDIA:
      newState.selectedMedia = action.id
      // newState.allMedia = [...newState.allMedia, action.text]
      return newState
    case CREATE_SINGLE_MEDIA:
      newState.allMedia = [...newState.allMedia, action.media]
      newState.selectedMedia = action.media.id
      return newState
    case UPDATE_SINGLE_MEDIA:
        return {...state, allMedia: [...state.allMedia.filter(media => media.id !== action.media.id), action.media]}
        // newState.allMedia = [...newState.allMedia.filter(media => media.id !== action.media.id), action.media]
        // return newState
    case DELETE_SINGLE_MEDIA:
      newState.allMedia = newState.allMedia.filter(
        media => media.id !== action.id
      )
      newState.selectedMedia = ''
      return newState
    case DESELECT_CANVAS_ELEMENT:
      newState.slectedText = ''
      newState.selectedMedia = ''
      return newState
    default:
      return state
  }
}
