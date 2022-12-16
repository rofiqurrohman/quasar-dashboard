<template>
  <div class="q-pa-md">
    <p class="text-weight-bold text-h6">List Vehicle</p>
    <div class="q-pa-md" style="max-width: 450px">
      <q-list bordered separator>
        <q-item v-for="(value, key, index) in getData" :key="index" v-ripple>
          <q-item-section>
            <q-item-label class="text-caption text-grey-9">{{ changeString(key) }}</q-item-label>
            <q-item-label>{{ value }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeString(string) {
      return string
        .replace(/_/g, ' ')
        .split(' ')
        .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(' ');
    },
  },
  created() {
    const chassisNumber = this.$route.params.id_chassis;
    this.$store.dispatch('vehicle/getVehicleById', chassisNumber);
  },
  computed: {
    getData() {
      return this.$store.state.vehicle.vehicleById;
    },
  },
};
</script>
