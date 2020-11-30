import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost/lostnfound/Desenvolvimento/3.Implementacao/backend/controller/php/"
});

export default api;
