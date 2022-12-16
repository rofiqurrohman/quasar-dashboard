<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { api } from './boot/axios';

export default {
  name: 'App',
  mounted() {
    if (localStorage.getItem('token')) {
      api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
  },
};
</script>
