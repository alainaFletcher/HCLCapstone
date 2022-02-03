import axios from "axios";
import { GET_ERRORS , GET_PROJECTS,GET_PROJECT,UPDATE_PROJECT,DELETE_PROJECT,COUNT_PROJECT_TASKS,SUM_PROJECT_TASKS,SUM_PROJECTS} from "./types"
import { COUNT } from "arg";

export const createProject = (project, history) => async dispatch => {
  try {
    await axios.post("/api/project", project);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  const res = await axios.get("/api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data
  });
};

export const getProject = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/project/${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProject = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`/api/project/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  }
};

// COUNT TASKS ON PROJECT 
export const countProjectTasks = (id) => async dispatch => {


  // Find redux way to DISPATCH 
  const res = await axios.get(`/api/backlog/count/all/${id}`)


  return res.data;

  // dispatch({
  //     type: COUNT_PROJECT_TASKS,
  //     payload: res.data
  // })
  
  
}

// SUM TASKS 
export const sumProjectTasks = () => async dispatch => {

  // Find redux way to DISPATCH 
  const res = await axios.get(`/api/backlog/sum`)

  return res.data;

  // dispatch({
  //     type: SUM_PROJECT_TASKS
  //     payload: res.data
  // })
  
  
}

// SUM TASKS 
export const sumProjects = () => async dispatch => {

  // Find redux way to DISPATCH 
  const res = await axios.get(`/api/project/sum`)

  return res.data;

  // dispatch({
  //     type: SUM_PROJECT_TASKS
  //     payload: res.data
  // })
  
  
}