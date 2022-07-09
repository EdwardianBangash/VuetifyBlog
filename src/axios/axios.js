import axios from 'axios';
import store from '../store/index.js';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

axios.defaults.headers.common['Authorization'] = 'Bearer '+store.getters.user;