export default function(state = "", action) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "ADD_USER":
      return state;
    default:
      return state;
  }
}
