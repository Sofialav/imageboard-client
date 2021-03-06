import request from "superagent";
const baseUrl = "https://fathomless-temple-91569.herokuapp.com";

// get images
export const allImages = payload => {
  return {
    type: "ALL_IMAGES",
    payload
  };
};
export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request
      .get(`${baseUrl}/images`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
// create image
export const newImage = payload => {
  return {
    type: "NEW_IMAGE",
    payload
  };
};
export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/images`)
    // setting header
    .set({ Authorization: `Bearer ${user}` })
    .send(data)
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
// login
export const loginUser = payload => {
  return {
    type: "LOGIN_USER",
    payload
  };
};
export const login = data => dispatch => {
  console.log("ITS ALIVE");
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = loginUser(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
// signup
export const addUser = () => {
  return {
    type: "ADD_USER"
  };
};
export const signup = data => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then(response => {
      const action = addUser();
      dispatch(action);
    })
    .catch(console.error);
};
// get users
export const allUsers = payload => {
  return {
    type: "ALL_USERS",
    payload
  };
};
export function getUsers() {
  return async function thunk(dispatch, getState) {
    try {
      const state = getState();
      const { users } = state;
      if (!users.length) {
        const response = await request.get(`${baseUrl}/users`);
        const action = allUsers(response.body);
        dispatch(action);
      }
    } catch (error) {
      console.log(error);
    }
  };
}
