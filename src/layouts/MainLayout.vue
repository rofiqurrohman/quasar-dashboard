<template>
  <div style="height: 100vh">
    <q-layout view="hhh LpR fff" container class="">
      <q-header reveal class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
          <q-toolbar-title>Dashboard</q-toolbar-title>
          <q-btn flat round dense class="q-mr-lg">
            <q-avatar size="30px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-menu :offset="[50, 10]">
              <q-item clickable v-close-popup>
                <q-item-section>
                  <span class="text-weight-bold">{{ getUsers.name }}</span>
                  <span class="text-caption">{{ getUsers.email }}</span>
                </q-item-section>
              </q-item>
            </q-menu>
          </q-btn>
          <q-btn flat @click="logout" round dense icon="logout" />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawerLeft" show-if-above :width="200" :breakpoint="500" bordered content-class="bg-grey-3">
        <q-scroll-area class="fit">
          <q-list>
            <!-- <router-link to="/"> -->
            <q-item to="/" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section> Dashboard </q-item-section>
            </q-item>
            <q-item to="/vehicle" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="local_shipping" />
              </q-item-section>
              <q-item-section> Vehicle </q-item-section>
            </q-item>
            <!-- </router-link> -->
            <q-separator />
            <q-item to="/settings" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section> Settings </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  components: {
    // EssentialLink,
  },
  data() {
    return {
      drawerLeft: false,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
  },
  computed: {
    getUsers() {
      return this.$store.state.auth.users;
    },
  },
};
</script>
