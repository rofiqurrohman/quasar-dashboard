import { api } from 'boot/axios';

export default {
  namespaced: true,
  state: {
    listVehicle: [],
    vehicleById: {},
  },
  getters: {
  },
  mutations: {
    SET_LIST_VEHICLE(state, value) {
      state.listVehicle = value;
    },
    SET_VEHICLE_BY_ID(state, value) {
      state.vehicleById = value;
    },
  },
  actions: {
    getListVehicle({ commit }) {
      // console.log(status);
      api.get('/vehicle/vehicle_history/list_vehicle_history?count_perpage=10&page=1&owner_id=2f390af6-1bf0-3ee8-e498-72accc6d9565&dealer_id=&search=&sort=&vehicle_model_id=&vehicle_category_id=&status_vehicle=1&activation_status=&last_service&next_service&sales_year&header=chassis_number,vehicle_name')
        .then((response) => {
          // console.log(response.data);
          commit('SET_LIST_VEHICLE', response.data.result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getVehicleById({ commit }, idChassis) {
      api.get(`/vehicle/vehicle_history/view_vehicle_history?chassis_number=${idChassis}`)
        .then((response) => {
          // console.log(response.data);
          commit('SET_VEHICLE_BY_ID', response.data.result);
        })
        .catch((err) => {
          console.log(err);
          // this.$router.push({ name: 'Login' });
        });
    },
  },
};
