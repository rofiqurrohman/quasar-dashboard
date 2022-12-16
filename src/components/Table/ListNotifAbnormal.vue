<template>
  <div class="q-pa-md">
    <q-table title="Treats" :data="getData" :columns="columns" row-key="index" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: 'imei',
          label: 'IMEI',
          field: 'imei',
          align: 'left',
        },
        {
          name: 'status',
          label: 'Status',
          field: 'status',
          align: 'left',
          sortable: true,
        },
        {
          name: 'chassis_number',
          label: 'Chassis Number',
          field: 'chassis_number',
          align: 'left',
        },
        {
          name: 'category',
          label: 'Category',
          field: 'category',
          align: 'left',
          sortable: true,
        },
        {
          name: 'plate_number',
          label: 'Plate Number',
          field: 'plate_number',
          sortable: true,
        },
        {
          name: 'time_stamp',
          label: 'Timestamp',
          field: 'time_stamp',
          align: 'center',
        },
        {
          name: 'phone',
          label: 'Phone',
          field: 'phone',
        },
        {
          name: 'alert_status',
          label: 'Alert Status',
          field: 'alert_status',
          sortable: true,
        },
        {
          name: 'status_desc',
          label: 'Desc',
          field: 'status_desc',
          sortable: true,
        },
      ],
    };
  },

  mounted() {
    this.$store.dispatch('dashboard/getListNotifAbnormal', { status: 'Total', filter: 'accident' });
  },
  computed: {
    getData() {
      return this.$store.state.dashboard.listNotifAbnormal;
    },
  },
};
</script>
