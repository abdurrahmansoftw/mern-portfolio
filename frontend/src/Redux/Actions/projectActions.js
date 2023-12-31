import axios from 'axios'
import {
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_REVIEW_FAIL,
  PROJECT_CREATE_REVIEW_REQUEST,
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
  PROJECT_UPDATE_SUCCESS
} from '../Constants/projectConstants'
import { logout } from './userActions'

export const listProjects = (keyword= '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST })
    const { data } = await axios.get(`/api/projects?keyword=${keyword}&pageNumber=${pageNumber}`)
    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const listProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/projects/${id}`)
    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PROJECT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}

export const deleteProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_DELETE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    await axios.delete(`/api/projects/${id}`, config)
    dispatch({ type: PROJECT_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PROJECT_DELETE_FAIL, payload: message })
  }
}

export const createProject = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.post(`/api/projects`, {}, config)
    dispatch({ type: PROJECT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PROJECT_CREATE_FAIL, payload: message })
  }
}

export const updateProject = (project) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_UPDATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    const { data } = await axios.put(`/api/projects/${project._id}`, project, config)
    dispatch({ type: PROJECT_UPDATE_SUCCESS, payload: data })
    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PROJECT_UPDATE_FAIL, payload: message })
  }
}

export const createProjectReview = (projectId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_CREATE_REVIEW_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()

    const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } }
    await axios.post(`/api/projects/${projectId}/reviews`, review, config)
    dispatch({ type: PROJECT_CREATE_REVIEW_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: PROJECT_CREATE_REVIEW_FAIL, payload: message })
  }
}

export const listTopProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_TOP_REQUEST })
    const { data } = await axios.get(`/api/projects/top`)
    dispatch({ type: PROJECT_TOP_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PROJECT_TOP_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
  }
}
