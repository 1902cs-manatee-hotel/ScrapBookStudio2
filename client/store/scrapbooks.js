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

const getSingleScrapbook = (id) => ({
    type: GET_SINGLE_SCRAPBOOK,
    id
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

export const deleteScrapbookThunk = scrapbook => {
    return dispatch => {
        dispatch(deleteScrapbook(scrapbook))
        axios.delete(`/api/scrapbook/${scrapbook.id}`)
        .catch(err => console.error('Failed to delete scrapbook', err))
    }
}

export const updateScrapbookThunk = scrapbook => {
    return  dispatch => {
        dispatch(updateScrapbook(scrapbook))
        axios.put(`/api/scrapbooks/${scrapbook.id}`, scrapbook)
            .then(({data: s}) => dispatch(updateScrapbook(s)))
            .catch(err => console.error('Failed to update scrapbook', err))
    }

}




 /**
 * NOT YET COMPLETED THUNK CREATORS   *************** ************** ***************
 */

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

 export default function(state = initialState, action) {
     
     switch(action.type) {
        case GET_ALL_SCRAPBOOKS:
            return {...state, scrapbooks: action.scrapbooks}
        case DELETE_SCRAPBOOK:
            return state.scrapbooks.filter(scrapbook =>
                scrapbook.id !== action.scrapbook.id)
        default:
            return state
     }
 }
