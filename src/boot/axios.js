import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios = axios;

const api = axios.create({ baseURL: 'https://qagateway.ktbfuso.id' });
Vue.prototype.$api = api;

export { axios, api };
