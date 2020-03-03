import { combineReducers } from "redux";
import images from "./images";
import user from "./user";
import users from "./users";

export default combineReducers({
  images,
  user,
  users
});
