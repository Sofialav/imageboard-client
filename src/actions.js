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
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = loginUser(response.body.jwt);
      dispatch(action);
    })
    .catch(console.error);
};
