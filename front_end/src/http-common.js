import axios from "axios";

// export default () => {
//   let headers = {
//       'cache-control': 'no-cache',
//       "Content-type": "application/json",
//   };
//   let accessToken = JSON.parse(localStorage.getItem('vuex')).token;

//   if (accessToken && accessToken !== '') {
//       headers.Authorization = "Bearer "+accessToken;
//   };
//   const instance = axios.create({
//       baseURL: "http://127.0.0.1:8000/",
//       headers: headers
//   });

//   instance.interceptors.response.use((response) => {
//       if(response.status === 401) {
//            //add your code
//            alert("You are not authorized");
//       }
//       return response;
//   }, (error) => {
//       if (error.response && error.response.data) {
//            //add your code
//            return Promise.reject(error.response.data);
//       }
//       return Promise.reject(error.message);
//   });

//   return instance;
// }
var token = JSON.parse(localStorage.getItem("vuex"))
  ? "Bearer " + JSON.parse(localStorage.getItem("vuex")).token
  : "";
export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-type": "application/json",
    Authorization: token,
  },
});
