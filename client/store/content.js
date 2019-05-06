import axios from 'axios'

/**
 * ACTION TYPES
 */
 const GET_ALL_TEXT = 'GET_ALL_TEXT'
 const GET_TEXT = 'GET_TEXT'
 const UPDATE_TEXT = 'UPDATE_TEXT'
 const CREATE_TEXT = 'CREATE_TEXT'
 const DELETE_TEXT = 'DELETE_TEXT'

 const GET_ALL_IMAGES = 'GET_ALL_IMAGES'
 const GET_IMAGE = 'GET_IMAGE'
 const UPDATE_IMAGE = 'UPDATE_IMAGE'
 const CREATE_IMAGE = 'CREATE_IMAGE'
 const DELETE_IMAGE = 'DELETE_IMAGE'

 const GET_ALL_VIDEOS = 'GET_ALL_VIDEOS'
 const GET_VIDEO = 'GET_VIDEO'
 const UPDATE_VIDEO = 'UPDATE_VIDEO'
 const CREATE_VIDEO = 'CREATE_VIDEO'
 const DELETE_VIDEO = 'DELETE_VIDEO'

/**
 * ACTION CREATORS
 */

 const getAllText = (allText) => ({
    type: GET_ALL_TEXT,
    allText
 })

 const getSingleText = (text) => ({
     type: GET_TEXT,
     text
 })

 const updateSingleText = (text) => ({
     type: UPDATE_TEXT,
     text
 })

 const createSingleText = (text) => ({
     type: CREATE_TEXT,
     text
 })

 const deleteSingleText = (id) => ({
     type: DELETE_TEXT,
     id
 })

 const getAllImages = (allImage) => ({
    type: GET_ALL_IMAGES,
    allImage
 })

 const getSingleImage = (image) => ({
     type: GET_IMAGE,
     image
 })

 const updateSingleImage = (image) => ({
     type: UPDATE_IMAGE,
     image
 })

 const createSingleImage = (image) => ({
     type: CREATE_IMAGE,
     image
 })

 const deleteSingleImage = (id) => ({
     type: DELETE_IMAGE,
     id
 })

 const getAllVideos = (allVideos) => ({
    type: GET_ALL_VIDEOS,
    allVideos
 })

 const getSingleVideo = (video) => ({
     type: GET_VIDEO,
     video
 })

 const updateSingleVideo = (video) => ({
     type: UPDATE_VIDEO,
     video
 })

 const createSingleVideo = (video) => ({
     type: CREATE_VIDEO,
     video
 })

 const deleteSingleVideo = (id) => ({
     type: DELETE_VIDEO,
     id
 })

 //Thunks
 export const getAllTextThunk = () => async dispatch => {
  try {
      const {data} = await axios.get('/api/canvastext')
      dispatch(getAllText(data))
  } catch(err) {console.error(err)}
}

export const getSingleTextThunk = (id) =>  async dispatch => {
  try {
     const {data} = await axios.get(`/api/canvastext/${id}`)
      dispatch(getSingleText(data))
  } catch (err) {console.error(err)}
}

export const deleteSingleTextThunk = id => async dispatch => {
  try {
      await axios.delete(`api/canvastext/${id}`)
      dispatch(deleteSingleText(id))
  } catch (err) {console.error(err)}
}

export const updateSingleTextThunk = (updatedProp, id) => async dispatch => {
      try {
          const {data} = await axios.put(`/api/canvastext/${id}`, updatedProp)
          dispatch(updateSingleText(data))
      } catch (err) {console.log(err)}
}

export const getAllTextThunk = () => async dispatch => {
  try {
      const {data} = await axios.get('/api/canvastext')
      dispatch(getAllText(data))
  } catch(err) {console.error(err)}
}

export const getSingleTextThunk = (id) =>  async dispatch => {
  try {
     const {data} = await axios.get(`/api/canvastext/${id}`)
      dispatch(getSingleText(data))
  } catch (err) {console.error(err)}
}

export const deleteSingleTextThunk = id => async dispatch => {
  try {
      await axios.delete(`api/canvastext/${id}`)
      dispatch(deleteSingleText(id))
  } catch (err) {console.error(err)}
}

export const updateSingleTextThunk = (updatedProp, id) => async dispatch => {
      try {
          const {data} = await axios.put(`/api/canvastext/${id}`, updatedProp)
          dispatch(updateSingleText(data))
      } catch (err) {console.log(err)}
}




  /**
 * INITIAL STATE
 */
const initialState = {
    allText: [],
    selectedText: {},
    allImages: [],
    selectedImage: {},
    allVideos: [],
    slectedVideo: {}
}
