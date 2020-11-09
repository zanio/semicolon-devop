export const API_URL = process.env.NODE_ENV === 'development'?
    "http://localhost:5151/api/":"https://semicolon-devop-backend.herokuapp.com/api";
export default API_URL;
