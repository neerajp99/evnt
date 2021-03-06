import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Set token to all the requests
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Remove the authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
