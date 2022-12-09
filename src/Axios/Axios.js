import axios from "axios";


 const  apidata = axios.create({

    baseURL:"https://jsonplaceholder.typicode.com   ",
    timeout:1000,
    headers:{'X-custom-Header':'foobar'}

 });


 apidata.interceptors.request.use(function (config) {
    Object.assign(config,{test:'1212'})
  console.log(config,'config');
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


apidata.interceptors.response.use(function (response) {
   
    
    console.log(response,"skjndjsbjkbdjbfc")
    return response.data;
  }, function (error) {
   
    return Promise.reject(error);
  });

 export default apidata