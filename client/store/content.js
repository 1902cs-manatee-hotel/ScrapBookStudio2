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

 const getText = (text) => ({
     type: GET_TEXT,
     text
 })

 const updateText = (text) => ({
     type: UPDATE_TEXT,
     text
 })

 const createText = (text) => ({
     type: CREATE_TEXT,
     text
 })

 const deleteText = (id) => ({
     type: DELETE_TEXT,
     id
 })

 const getAllImages = (allImage) => ({
    type: GET_ALL_IMAGES,
    allImage
 })

 const getImage = (image) => ({
     type: GET_IMAGE,
     image
 })

 const updateImage = (image) => ({
     type: UPDATE_IMAGE,
     image
 })

 const createImage = (image) => ({
     type: CREATE_IMAGE,
     image
 })

 const deleteImage = (id) => ({
     type: DELETE_IMAGE,
     id
 })

 const getAllVideos = (allVideos) => ({
    type: GET_ALL_VIDEOS,
    allVideos
 })

 const getVideo = (video) => ({
     type: GET_VIDEO,
     video
 })

 const updateVideo = (video) => ({
     type: UPDATE_VIDEO,
     video
 })

 const createVideo = (video) => ({
     type: CREATE_VIDEO,
     video
 })

 const deleteViideo = (id) => ({
     type: DELETE_VIDEO,
     id
 })



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