<template>
  <div class="q-pa-md">
    <div>
      <p class="text-weight-bold text-h6">Table Vehicle</p>
      <q-table title="Vehicle" :data="getData" row-key="imei" @row-click="getChassisNumber" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          chassis_number: 'MHMFE71PCJK013691',
          engine_number: '4D34T-S84142',
          imei: '359632109742186',
          vehicle_name: 'B 9018 NEN',
          vehicle_number: '2602',
          owner_id: '2f390af6-1bf0-3ee8-e498-72accc6d9565',
          owner_name: null,
          device_status: null,
          euro_std: 'euro2',
          dealer_id: '006f52e9-102a-8d3b-e2fe-5614f42ba989',
          dealer_name: null,
          dealer_area_id: null,
          dealer_area_name: null,
          activation_status: '2',
          activation_date: '2019-01-17',
          subscription_period: null,
          stnk_date: '',
          kir_date: '',
          area: null,
          odometer: null,
          business_sector_id: null,
          vehicle_type_id: 'TG30',
          vehicle_type_name: 'FE71 L PE DK5',
          vehicle_model_id: '4682dbfc-3cdb-49b0-94cc-f9c51a967872',
          vehicle_model_name: 'COLT DIESEL',
          vehicle_category_id: 'd8161c7e-5a32-4ea4-a0c3-0222a7672b51',
          vehicle_category_name: 'LDT',
          status_vehicle_history: '1',
          proof_of_ownership: null,
          fuel_capacity: '100',
          weight: null,
          length: null,
          width: null,
          height: null,
          rear_body_type_id: null,
          rear_body_type_name: null,
          load_type_id: null,
          load_type_name: null,
          vehicle_group: '',
          vehicle_group_list: null,
          created_at: '2022-07-18 04:14:51.695453',
          end_date: '',
        },
      ],
    };
  },
  methods: {
    getChassisNumber(evt, row) {
      // console.log(evt);
      // console.log(index);
      // console.log(row.chassis_number);
      this.$router.push({
        name: 'vehicle.detail',
        params: {
          id_chassis: row.chassis_number,
        },
      });
    },
  },
  mounted() {
    this.$store.dispatch('vehicle/getListVehicle');
  },
  computed: {
    getData() {
      return this.$store.state.vehicle.listVehicle;
    },
  },
};
</script>
