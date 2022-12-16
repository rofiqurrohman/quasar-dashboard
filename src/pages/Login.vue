<template>
  <div class="row items-center justify-center" style="height: 100vh">
    <div class="q-pa-md bg-blue-1 rounded-borders" style="max-width: 400px">
      <span class="block text-center text-h6 q-pb-md">LOGIN</span>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="username" label="username *" required />

        <q-input
          v-model="password"
          label="password *"
          filled
          :type="isPwd ? 'password' : 'text'"
          required
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,

      accept: false,
      isPwd: true,
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first',
        });
      } else {
        const formData = new FormData();
        formData.append('username', this.username);
        formData.append('password', this.password);

        this.$store
          .dispatch('auth/login', formData)
          .then((response) => {
            // console.log(response);
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Login success',
            });
            this.$router.push({ name: 'Home' });
          })
          .catch((err) => {
            this.$q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: err.data.error,
            });
          });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    },
  },
};
</script>
