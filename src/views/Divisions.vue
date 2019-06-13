<template>
<div id="divisions">
    <DivisionSelector @selectDivision="selectDivision" />
    <DivisionRosters
      v-bind:selectedDivision="selectedDivision"
      v-bind:divisionRosterList="divisionRosterList" />
</div>
</template>

<style scoped>
#divisions {
    margin: 1%;
    display: flex;
    flex-direction: row;
}
</style>

<script>
/* import axios from 'axios'; */
import DivisionSelector from '@/components/divisions/DivisionSelector.vue';
import DivisionRosters from '@/components/divisions/DivisionRosters.vue';
import * as mockRosters from '../assets/mocks/rosters/rosters.json';
/* import END_POINT from '@/app.config'; */

export default {
  name: 'Divisions',
  components: {
    DivisionSelector,
    DivisionRosters,
  },
  data() {
    return {
      selectedDivision: {},
      divisionRosterList: [],
    };
  },
  methods: {
    selectDivision(selectedDivision) {
      this.selectedDivision = selectedDivision;
    },
    getRosterList() {
      /* axios.get(`${END_POINT}/rosters`)
        .then(response => this.setRosterList(response.data))
        .catch(error => console.log(error)); */
    },
    setRosterList(divisionRosterList) {
      this.divisionRosterList = divisionRosterList;
    },
  },
  mounted() {
    /* this.getRosterList(); */
    /* mock service */
    setTimeout(() => this.setRosterList(mockRosters.default.rosters), 2000);
  },
};
</script>
