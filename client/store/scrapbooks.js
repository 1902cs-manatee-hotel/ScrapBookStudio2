import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_SCRAPBOOKS = 'GET_ALL_SCRAPBOOKS'
const GET_SINGLE_SCRAPBOOK = 'GET_SINGLE_SCRAPBOOK'
const DELETE_SINGLE_SCRAPBOOK = 'DELETE_SINGLE_SCRAPBOOK'
const UPDATE_SINGLE_SCRAPBOOK = 'UPDATE_SINGLE_SCRAPBOOK'
const GET_ALL_PAGES = 'GET_ALL_PAGES'
const GET_SINGLE_PAGE = 'GET_SINGLE_PAGE'
const DELETE_SINGLE_PAGE = 'DELETE_SINGLE_PAGE'

 /**
 * ACTION CREATORS
 */
const getAllScrapbooks = (scrapbooks) => ({
    type: GET_ALL_SCRAPBOOKS,
    scrapbooks
})

const getSingleScrapbook = (id) => ({
    type: GET_SINGLE_SCRAPBOOK,
    id
})

const deleteSingleScrapbook = (id) => ({
    type: DELETE_SINGLE_SCRAPBOOK,
    id
})

const updateSingleScrapbook = (scrapbook) => ({
    type: UPDATE_SINGLE_SCRAPBOOK,
    scrapbook
})

const getAllPages = (pages) => ({
    type: GET_ALL_PAGES,
    pages
})

const getSinglePage = (id) => ({
    type: GET_SINGLE_PAGE,
    id
})

const deleteSinglePage = (id) => ({
    type: DELETE_SINGLE_PAGE,
    id
})

 /**
 * THUNK CREATORS
 */
export const getAllScrapbooksThunk = () => async dispatch => {
    try {
        const {data} = await axios.get('/api/scrapbooks')
        dispatch(getAllScrapbooks(data))
    } catch(err) {console.error(err)}
}

export const deleteSingleScrapbookThunk = (id) => async dispatch => {
    try {
        await axios.delete(`/api/scrapbooks/${id}`)
        dispatch(deleteSingleScrapbook(id))
    } catch(err) {console.error(err)}
}

export const updateSingleScrapbookThunk = (id, updatedScrapbook) => async dispatch => {
    try {
        const {data} = await axios.put(`/api/scrapbooks/${id}`, updatedScrapbook)
        dispatch(updateSingleScrapbook(data))
    } catch(err) {console.error(err)}
}

export const getAllPagesThunk = () => async dispatch => {
    try {
        const {data} = await axios.get('/api/pages')
        dispatch(getAllPages(data))
    } catch(err) {console.error(err)}
}

export const deleteSinglePageThunk = (id) => async dispatch => {
    try {
        await axios.delete(`/api/pages/${id}`)
        dispatch(deleteSinglePage(id))
    } catch(err) {console.error(err)}
}

 /**
 * INITIAL STATE
 */
const initialState = {
    scrapbooks: [],
    singleScrapbook: {},
    pages: [],
    singlePage: {},
}

/**
 * REDUCER
 */

 export default function(state=initialState, action) {
     const newState = {...state}
     switch(action.type) {
        case GET_ALL_SCRAPBOOKS:
            newState.scrapbooks=action.scrapbooks
            return 
        default:
            return newState
     }
 }
