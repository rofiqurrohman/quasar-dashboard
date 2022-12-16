<template>
  <q-page class="q-pa-md">
    <p class="text-weight-bold text-h6">Total Dashboard</p>
    <q-select
      standout="bg-grey-2 text-grey-8"
      label="filter"
      emit-value
      map-options
      v-model="model"
      :options="options"
      style="width: 250px"
      @input="handleChange()"
    />

    <!-- <div>
          <card-status
            v-for="(value, key, index) in getData"
            :key="value"
            class="col-md-2 col-12"
            :title="changeString(key)"
            :value="value ? value : 0"
            @eClick="stringSame(index)"
          />
        </div> -->

    <div class="row q-gutter-md q-mt-sm">
      <card-status
        class="col-md-2 col-12"
        title="Total Incident"
        :value="getData.total_incident ? getData.total_incident : 0"
        @eClick="handleUpdateTable('Total')"
      />
      <card-status
        class="col-md-2 col-12"
        title="On Going"
        :value="getData.on_going ? getData.on_going : 0"
        @eClick="handleUpdateTable('On going')"
      />
      <card-status
        class="col-md-2 col-12"
        title="Reported"
        :value="getData.reported ? getData.reported : 0"
        @eClick="handleUpdateTable('Reported')"
      />
      <card-status
        class="col-md-2 col-12"
        title="Being Resolved"
        :value="getData.being_resolved ? getData.being_resolved : 0"
        @eClick="handleUpdateTable('Dismissed')"
      />
    </div>

    <div class="q-mt-md">
      <span class="text-h6">Table List</span>
      <table-list-notif-abnormal />
    </div>
  </q-page>
</template>

<script>
import CardStatus from 'src/components/Card/Status.vue';
import TableListNotifAbnormal from 'src/components/Table/ListNotifAbnormal.vue';

export default {
  components: { CardStatus, TableListNotifAbnormal },
  data() {
    return {
      drawerLeft: false,
      model: 'accident',
      options: [
        {
          label: 'Accident',
          value: 'accident',
        },
        {
          label: 'Tempering',
          value: 'tempering',
        },
        {
          label: 'Theft',
          value: 'theft',
        },
      ],
    };
  },
  methods: {
    handleChange() {
      // console.log(this.model);
      this.$store.dispatch('dashboard/getCountNotifAbnormal', this.model);
    },
    handleUpdateTable(name) {
      // console.log(name, this.model);
      this.$store.dispatch('dashboard/getListNotifAbnormal', { status: name, filter: this.model });
    },
    stringSame(string) {
      console.log(string);
      // const text = this.changeString(string).includes('Total');
    },
    changeString(string) {
      return string
        .replace('_', ' ')
        .split(' ')
        .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(' ');
    },
  },
  mounted() {
    this.$store.dispatch('dashboard/getCountNotifAbnormal', this.model);
    // console.log(this.$store.state);
  },
  computed: {
    getData() {
      return this.$store.state.dashboard.countNotifAbnormal;
    },
  },
};
</script>
