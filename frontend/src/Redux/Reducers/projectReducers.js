import {
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_RESET,
  PROJECT_CREATE_REVIEW_FAIL,
  PROJECT_CREATE_REVIEW_REQUEST,
  PROJECT_CREATE_REVIEW_RESET,
  PROJECT_CREATE_REVIEW_SUCCESS,
  PROJECT_CREATE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_TOP_FAIL,
  PROJECT_TOP_REQUEST,
  PROJECT_TOP_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_RESET,
  PROJECT_UPDATE_SUCCESS,
} from '../Constants/projectConstants'

export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true, projects: [] }
    case PROJECT_LIST_SUCCESS:
      return { loading: false, projects: action.payload.projects, pages: action.payload.pages, page: action.payload.page }
    case PROJECT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const projectDetailsReducer = (state = { project: { reviews: [] } }, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PROJECT_DETAILS_SUCCESS:
      return { loading: false, project: action.payload }
    case PROJECT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const projectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DELETE_REQUEST:
      return { loading: true }
    case PROJECT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PROJECT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const projectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_REQUEST:
      return { loading: true }
    case PROJECT_CREATE_SUCCESS:
      return { loading: false, success: true, project: action.payload }
    case PROJECT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PROJECT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const projectUpdateReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return { loading: true }
    case PROJECT_UPDATE_SUCCESS:
      return { loading: false, success: true, project: action.payload }
    case PROJECT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PROJECT_UPDATE_RESET:
      return { project: {} }
    default:
      return state
  }
}

export const projectReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case PROJECT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PROJECT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case PROJECT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const projectTopRatedReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_TOP_REQUEST:
      return { loading: true, projects: [] }
    case PROJECT_TOP_SUCCESS:
      return { loading: false, projects: action.payload }
    case PROJECT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
