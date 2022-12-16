<template>
  <q-card
    v-ripple
    class="my-card text-white cursor-pointer"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    @click="$emit('eClick')"
  >
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">{{ value }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    title: String,
    value: Number,
  },
  // methods: {
  //   handleUpdateTable() {
  //     console.log(this);
  //   },
  // },
};
</script>
