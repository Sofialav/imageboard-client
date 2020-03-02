import request from "superagent";
const baseUrl = "http://localhost:4000";

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
export const createImage = data => dispatch => {
  request
    .post(`${baseUrl}/images`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};