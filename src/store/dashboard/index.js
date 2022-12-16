import { api } from 'boot/axios';

export default {
  namespaced: true,
  state: {
    countNotifAbnormal: {},
    listNotifAbnormal: [],
  },
  getters: {
  },
  mutations: {
    SET_COUNT_NOTIF_ABNORMAL(state, value) {
      state.countNotifAbnormal = value;
    },
    SET_LIST_NOTIF_ABNORMAL(state, value) {
      state.listNotifAbnormal = value;
    },
  },
  actions: {
    getCountNotifAbnormal({ commit }, status) {
      // console.log(status);
      api.get(`/notification/notif_abnormal/count_notif_abnormal?filter=risks&search=${status}`)
        .then((response) => {
          // console.log(response.data.result);
          commit('SET_COUNT_NOTIF_ABNORMAL', response.data.result);
        })
        .catch((err) => {
          // console.log(err);
          this.$router.push({ name: 'Login' });
        });
    },

    getListNotifAbnormal({ commit }, { status, filter }) {
      // console.log(status, filter);
      api.get(`/notification/notif_abnormal/list_notif_abnormal?page=1&limit=10&filter=status,risks&search=${status},${filter}`)
        .then((response) => {
          // console.log(response.data.result);
          commit('SET_LIST_NOTIF_ABNORMAL', response.data.result.data ? response.data.result.data : []);
        })
        .catch((err) => {
          // console.log(err);
          // this.$router.push({ name: 'Login' });
        });
    },
  },
};
