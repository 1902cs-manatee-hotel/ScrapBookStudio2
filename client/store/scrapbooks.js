import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_SCRAPBOOKS = 'GET_ALL_SCRAPBOOKS'
const GET_SINGLE_SCRAPBOOK = 'GET_SINGLE_SCRAPBOOK'
const DELETE_SCRAPBOOK = 'DELETE_SCRAPBOOK'
const UPDATE_SCRAPBOOK = 'UPDATE_SCRAPBOOK'

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

const getSingleScrapbook = (scrapbook) => ({
    type: GET_SINGLE_SCRAPBOOK,
    scrapbook
})

const deleteScrapbook = (id) => ({
    type: DELETE_SCRAPBOOK,
    id
})

const updateScrapbook = (scrapbook) => ({
    type: UPDATE_SCRAPBOOK,
    scrapbook
})

const getAllPages = (pages) => ({
    type: GET_ALL_PAGES,
    pages
})

const getSinglePage = (page) => ({
    type: GET_SINGLE_PAGE,
    page
})

const deleteSinglePage = (id) => ({
    type: DELETE_SINGLE_PAGE,
    id
})

 /**
 * THUNK CREATORS
 */
export const getAllScrapbooksThunk = () => {
    return dispatch => {
        axios.get('/api/scrapbooks')
        .then(res => res.data)
         .then(scrapbooks => {
             const action = getAllScrapbooks(scrapbooks)
             dispatch(action)
            })
            .catch(err => console.error('Failed to get scrapbooks', err))
    }
}

export const deleteScrapbookThunk = id => async dispatch => {
    try {
        await axios.delete(`api/scrapbooks/${id}`)
        dispatch(deleteScrapbook(id))
    } catch (err) {console.error(err)}
}

export const updateScrapbookThunk = (updatedProp, id) => async dispatch => {
        try {
            const {data} = await axios.put(`/api/scrapbooks/${id}`, updatedProp)
            dispatch(updateScrapbook(data))
        } catch (err) {console.log(err)}
}

 export const getSingleScrapbookThunk = (id) =>  async dispatch => {
    try {
       const {data} = await axios.get(`/api/scrapbooks/${id}`)
        dispatch(getSingleScrapbook(data))
    } catch (err) {console.error(err)}
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

export const getSinglePageThunk = (id) => async dispatch => {
    try {
         const {data} = await axios.get(`api/pages/${id}`)
         dispatch(getSinglePage(data))
    } catch (err) {console.error(err)}
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

 export default function(state = initialState, action) {
     const newState = {...state}
     switch(action.type) {
        case GET_ALL_SCRAPBOOKS:
            newState.scrapbooks = action.scrapbooks
            return newState
        case DELETE_SCRAPBOOK:
            newState.scrapbooks = newState.scrapbooks.filter(scrapbook =>
            scrapbook.id !== action.id)
            return newState
        case GET_SINGLE_SCRAPBOOK:
            newState.singleScrapbook = action.scrapbook
            return newState
        case UPDATE_SCRAPBOOK:
            newState.singleScrapbook = action.scrapbook
            return newState
        case GET_ALL_PAGES:
            newState.pages = action.pages
            return newState
        case GET_SINGLE_PAGE:
            newState.singlePage = action.page
            return newState
        case DELETE_SINGLE_PAGE:
             newState.pages = newState.pages.filter(page => 
             page.is !== action.id)
             return newState
        default:
            return state
     }
 }
