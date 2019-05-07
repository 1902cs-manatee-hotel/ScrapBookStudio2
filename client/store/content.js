import axios from 'axios'

/**
 * ACTION TYPES
 */
 const GET_ALL_TEXT = 'GET_ALL_TEXT'
 const GET_SINGLE_TEXT = 'GET_SINGLE_TEXT'
 const UPDATE_SINGLE_TEXT = 'UPDATE_SINGLE_TEXT'
 const CREATE_SINGLE_TEXT = 'CREATE_SINGLE_TEXT'
 const DELETE_SINGLE_TEXT = 'DELETE_SINGLE_TEXT'

 const GET_ALL_IMAGES = 'GET_ALL_IMAGES'
 const GET_SINGLE_IMAGE = 'GET_SINGLE_IMAGE'
 const UPDATE_SINGLE_IMAGE = 'UPDATE_SINGLE_IMAGE'
 const CREATE_SINGLE_IMAGE = 'CREATE_SINGLE_IMAGE'
 const DELETE_SINGLE_IMAGE = 'DELETE_SINGLE_IMAGE'

 const GET_ALL_VIDEOS = 'GET_ALL_VIDEOS'
 const GET_SINGLE_VIDEO = 'GET_SINGLE_VIDEO'
 const UPDATE_SINGLE_VIDEO = 'UPDATE_SINGLE_VIDEO'
 const CREATE_SINGLE_VIDEO = 'CREATE_SINGLE_VIDEO'
 const DELETE_SINGLE_VIDEO = 'DELETE_SINGLE_VIDEO'

/**
 * ACTION CREATORS
 */

 const getAllText = (allText) => ({
    type: GET_ALL_TEXT,
    allText
 })

 const getSingleText = (text) => ({
     type: GET_SINGLE_TEXT,
     text
 })

 const updateSingleText = (text) => ({
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

 const getAllImages = (allImages) => ({
    type: GET_ALL_IMAGES,
    allImages
 })

 const getSingleImage = (image) => ({
     type: GET_SINGLE_IMAGE,
     image
 })

 const updateSingleImage = (image) => ({
     type: UPDATE_SINGLE_IMAGE,
     image
 })

 const createSingleImage = (image) => ({
     type: CREATE_SINGLE_IMAGE,
     image
 })

 const deleteSingleImage = (id) => ({
     type: DELETE_SINGLE_IMAGE,
     id
 })

 const getAllVideos = (allVideos) => ({
    type: GET_ALL_VIDEOS,
    allVideos
 })

 const getSingleVideo = (video) => ({
     type: GET_SINGLE_VIDEO,
     video
 })

 const updateSingleVideo = (video) => ({
     type: UPDATE_SINGLE_VIDEO,
     video
 })

 const createSingleVideo = (video) => ({
     type: CREATE_SINGLE_VIDEO,
     video
 })

 const deleteSingleVideo = (id) => ({
     type: DELETE_SINGLE_VIDEO,
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

export const createSingleTextThunk = (updatedProp) => async dispatch => {
  try {
      const {data} = await axios.post('/api/canvastext', updatedProp)
      dispatch(createSingleText(data))
  } catch (err) {console.log(err)}
}

export const updateSingleTextThunk = (updatedProp, id) => async dispatch => {
      try {
          const {data} = await axios.put(`/api/canvastext/${id}`, updatedProp)
          dispatch(updateSingleText(data))
      } catch (err) {console.log(err)}
}

export const deleteSingleTextThunk = id => async dispatch => {
  try {
      await axios.delete(`api/canvastext/${id}`)
      dispatch(deleteSingleText(id))
  } catch (err) {console.error(err)}
}

export const getAllVideosThunk = () => async dispatch => {
  try {
      const {data} = await axios.get('/api/videos')
      dispatch(getAllVideos(data))
  } catch(err) {console.error(err)}
}

export const getSingleVideoThunk = (id) =>  async dispatch => {
  try {
     const {data} = await axios.get(`/api/videos/${id}`)
      dispatch(getSingleVideo(data))
  } catch (err) {console.error(err)}
}

export const createSingleVideoThunk = (updatedProp) => async dispatch => {
  try {
      const {data} = await axios.post('/api/videos', updatedProp)
      dispatch(createSingleVideo(data))
  } catch (err) {console.log(err)}
}

export const updateSingleVideoThunk = (updatedProp, id) => async dispatch => {
      try {
          const {data} = await axios.put(`/api/videos/${id}`, updatedProp)
          dispatch(updateSingleVideo(data))
      } catch (err) {console.log(err)}
}

export const deleteSingleVideoThunk = id => async dispatch => {
  try {
      await axios.delete(`api/videos/${id}`)
      dispatch(deleteSingleVideo(id))
  } catch (err) {console.error(err)}
}

export const getAllImagesThunk = () => async dispatch => {
  try {
      const {data} = await axios.get('/api/images')
      dispatch(getAllImages(data))
  } catch(err) {console.error(err)}
}

export const getSingleImageThunk = (id) =>  async dispatch => {
  try {
     const {data} = await axios.get(`/api/images/${id}`)
      dispatch(getSingleImage(data))
  } catch (err) {console.error(err)}
}

export const createSingleImageThunk = (updatedProp) => async dispatch => {
  try {
      const {data} = await axios.post('/api/images', updatedProp)
      dispatch(createSingleImage(data))
      console.log('createSingeImageThunk', data);
  } catch (err) {console.log(err)}
}

export const updateSingleImageThunk = (updatedProp, id) => async dispatch => {
      try {
          const {data} = await axios.put(`/api/images/${id}`, updatedProp)
          dispatch(updateSingleImage(data))
      } catch (err) {console.log(err)}
}

export const deleteSingleImageThunk = id => async dispatch => {
  try {
      await axios.delete(`api/images/${id}`)
      dispatch(deleteSingleImage(id))
  } catch (err) {console.error(err)}
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

//Reducer
// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  const newState = {...state}
  switch(action.type) {
    case GET_ALL_TEXT:
         newState.allText = action.allText
         return newState
    case GET_SINGLE_TEXT:
        newState.selectedText = action.text
        return newState
    case CREATE_SINGLE_TEXT:
        newState.allText = [...newState.allText, action.text]
        newState.selectedText = action.text
        return newState
    case UPDATE_SINGLE_TEXT:
        newState.selectedText = action.text
        return newState
    case DELETE_SINGLE_TEXT:
         newState.allText = newState.allText.filter(text =>
         text.id !== action.id)
         return newState
    case GET_ALL_VIDEOS:
         newState.allVideos = action.allVideos
         return newState
    case GET_SINGLE_VIDEO:
        newState.selectedVideo = action.video
        return newState
    case CREATE_SINGLE_VIDEO:
        newState.allVideos = [...newState.allVideos, action.video]
        newState.selectedVideo = action.video
        return newState
    case UPDATE_SINGLE_VIDEO:
        newState.selectedVideo = action.video
        return newState
    case DELETE_SINGLE_VIDEO:
         newState.allVideos = newState.allVideos.filter(video =>
         video.id !== action.id)
         return newState
    case GET_ALL_IMAGES:
         newState.allImages = action.allImages
         return newState
    case GET_SINGLE_IMAGE:
        newState.selectedImage = action.image
        return newState
    case CREATE_SINGLE_IMAGE:
        newState.allImages = [...newState.allImages, action.image]
        newState.selectedImage = action.image
        return newState
    case UPDATE_SINGLE_IMAGE:
        newState.selectedImage = action.image
        return newState
     case DELETE_SINGLE_IMAGE:
         newState.allImages = newState.allImages.filter(image =>
         image.id !== action.id)
         return newState
     default:
         return state
  }
}
