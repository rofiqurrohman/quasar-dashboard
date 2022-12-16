import { api } from 'boot/axios';

export function login({ commit }, form) {
  return new Promise((resolve, reject) => {
    api.post('/user/user/login_user', form)
      .then((response) => {
        api.defaults.headers.common.Authorization = `Bearer ${response.data.result.token}`;
        localStorage.setItem('token', response.data.result.token);
        commit('SET_USER', response.data.result);
        resolve(response);
      })
      .catch((err) => reject(err.response));
  });
}
