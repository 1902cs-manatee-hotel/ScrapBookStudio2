import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ALL_SCRAPBOOKS = 'GET_ALL_SCRAPBOOKS'
const GET_SINGLE_SCRAPBOOK = 'GET_SINGLE_SCRAPBOOK'
const CREATE_SCRAPBOOK = 'CREATE_SCRAPBOOK'
const UPDATE_SCRAPBOOK = 'UPDATE_SCRAPBOOK'
const DELETE_SCRAPBOOK = 'DELETE_SCRAPBOOK'

const GET_ALL_PAGES = 'GET_ALL_PAGES'
const GET_SINGLE_PAGE = 'GET_SINGLE_PAGE'
const CREATE_SINGLE_PAGE = 'CREATE_SINGLE_PAGE'
const DELETE_SINGLE_PAGE = 'DELETE_SINGLE_PAGE'
const GET_ALL_SCRAPBOOK_MEDIA = 'GET_ALL_SCRAPBOOK_MEDIA'

const SET_NEXT_AND_PREVIOUS = 'SET_NEXT_AND_PREVIOUS'
const INCREASE_PAGE_INDEX = 'INCREASE_PAGE_INDEX'
const DECREASE_PAGE_INDEX = 'DECREASE_PAGE_INDEX'
const SET_PAGE_INDEX = 'SET_PAGE_INDEX'

 /**
 * ACTION CREATORS
 */
const getAllScrapbooks = (scrapbooks) => ({
    type: GET_ALL_SCRAPBOOKS,
    scrapbooks
})

export const getSingleScrapbook = (id) => ({
    type: GET_SINGLE_SCRAPBOOK,
    id
})

const createScrapbook = (scrapbook) => ({
  type: CREATE_SCRAPBOOK,
  scrapbook
})

const updateScrapbook = (scrapbook) => ({
    type: UPDATE_SCRAPBOOK,
    scrapbook
})

const deleteScrapbook = (id) => ({
    type: DELETE_SCRAPBOOK,
    id
})


const getAllPages = (pages) => ({
    type: GET_ALL_PAGES,
    pages
})

export const getSinglePage = (id) => ({
    type: GET_SINGLE_PAGE,
    id
})

const createSinglePage = (page) => ({
  type: CREATE_SINGLE_PAGE,
  page
})

const deleteSinglePage = (id) => ({
    type: DELETE_SINGLE_PAGE,
    id
})

const getAllScrapbookMedia = (media) => ({
  type: GET_ALL_SCRAPBOOK_MEDIA,
  media
})

export const setNextAndPrevious = () => ({
  type: SET_NEXT_AND_PREVIOUS
})

export const increasePageIndex = () => ({
  type: INCREASE_PAGE_INDEX
})

export const decreasePageIndex = () => ({
  type: DECREASE_PAGE_INDEX
})

export const setPageIndex = (pageId) => ({
  type: SET_PAGE_INDEX,
  pageId
})

 /**
 * THUNK CREATORS
 */

export const getAllScrapbooksThunk = (userId) => async dispatch => {
  try {
      const {data} = await axios.get(`/api/users/${userId}/scrapbooks`)
      dispatch(getAllScrapbooks(data))
  } catch(err) {console.error(err)}
}

export const createScrapbookThunk = (setProps) => async dispatch => {
  try {
      const {data} = await axios.post('/api/scrapbooks/', setProps)
      dispatch(createScrapbook(data))
  } catch (err) {console.log(err)}
}

export const updateScrapbookThunk = (updatedProp, id) => async dispatch => {
        try {
            const {data} = await axios.put(`/api/scrapbooks/${id}`, updatedProp)
            dispatch(updateScrapbook(data))
        } catch (err) {console.log(err)}
}

export const deleteScrapbookThunk = id => async dispatch => {
    try {
        await axios.delete(`api/scrapbooks/${id}`)
        dispatch(deleteScrapbook(id))
    } catch (err) {console.error(err)}
}


export const getAllPagesThunk = (scrapbookId) => async dispatch => {
    try {
        const {data} = await axios.get(`/api/scrapbooks/${scrapbookId}/pages`)
        // console.log('pages', data)
        dispatch(getAllPages(data))
    } catch(err) {console.error(err)}
}

export const createSinglePageThunk = (scrapbookid) => async dispatch => {
  try {
      const {data} = await axios.post(`/api/pages/${scrapbookid}`)
      dispatch(createSinglePage(data))
  } catch(err) {console.error(err)}
}

export const deleteSinglePageThunk = (id) => async dispatch => {
    try {
        await axios.delete(`/api/pages/${id}`)
        dispatch(deleteSinglePage(id))
    } catch(err) {console.error(err)}
}

export const getAllScrapbookMediaThunk = (scrapbookId) => async dispatch => {
  try {
      const {data} = await axios.get(`/api/scrapbooks/${scrapbookId}/media`)
    // const {data} = await axios.get(`/api/media/${scrapbookId}`)
      // console.log('***************MEDIA POOL DATA ***', data)
      dispatch(getAllScrapbookMedia(data))
  } catch(err) {console.error(err)}
}

 /**
 * INITIAL STATE
 */
const initialState = {
    scrapbooks: [],
    singleScrapbook: '',
    pages: [],
    singlePage: '',
    allScrapbookMedia: [],
    currentPageIndex: 0,
    nextPage: '',
    previousPage: ''
}

/**
 * REDUCER
 */

 // eslint-disable-next-line complexity
 export default function(state = initialState, action) {
     const newState = {...state}
     switch(action.type) {
        case GET_ALL_SCRAPBOOKS:
            newState.scrapbooks = action.scrapbooks
            return newState
        case GET_SINGLE_SCRAPBOOK:
            newState.singleScrapbook = action.id
            return newState
        case CREATE_SCRAPBOOK:
            newState.scrapbooks = [newState.scrapbooks, action.scrapbook]
            newState.singleScrapbook = action.scrapbook.id
            return newState
        case UPDATE_SCRAPBOOK:
            newState.scrapbooks = [newState.scrapbooks, ...action.scrapbook]
            return newState
        case DELETE_SCRAPBOOK:
            newState.scrapbooks = newState.scrapbooks.filter(scrapbook =>
            scrapbook.id !== action.id)
            newState.singleScrapbook = ''
            return newState
        case GET_ALL_PAGES:
            newState.pages = action.pages
            newState.singlePage = action.pages[0].id
            return newState
        case GET_SINGLE_PAGE:
            newState.singlePage = action.id
            return newState
        case CREATE_SINGLE_PAGE:
              newState.pages = [newState.pages, action.page]
              newState.singlePage = action.page.id
              return newState
        case DELETE_SINGLE_PAGE:
             newState.pages = newState.pages.filter(page =>
             page.id !== action.id)
             newState.singlePage = ''
             return newState
        case GET_ALL_SCRAPBOOK_MEDIA:
            newState.allScrapbookMedia = action.media
            return newState
        case SET_NEXT_AND_PREVIOUS:
              if(newState.currentPageIndex < newState.pages.length -1){
                newState.nextPage = newState.pages[newState.currentPageIndex + 1].id
              }
            if(newState.currentPageIndex !== 0){
              newState.previousPage = newState.pages[newState.currentPageIndex - 1].id
            }
            return newState
        case INCREASE_PAGE_INDEX:
            if(newState.currentPageIndex < newState.pages.length -1){
              newState.currentPageIndex = newState.currentPageIndex + 1;
            }
            return newState
        case DECREASE_PAGE_INDEX:
            if(newState.currentPageIndex !== 0){
              newState.currentPageIndex = newState.currentPageIndex - 1
            }
            return newState
        case SET_PAGE_INDEX:
            const currentPage = newState.pages.filter(page => page.id == action.pageId)
            newState.currentPageIndex = newState.pages.indexOf(currentPage[0])
            return newState
        default:
            return state
     }
 }
