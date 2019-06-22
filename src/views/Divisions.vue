<template>
<div id="divisions">
    <DivisionSelector @selectDivision="selectDivision" />
    <DivisionRosters
      v-bind:selectedDivision="selectedDivision"
      v-bind:divisionRosterList="divisionRosterList"
      @finishedLoading="finishLoading" />
      <template v-if="isLoading">
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    </template>
</div>
</template>

<style scoped>
#divisions {
    display: flex;
    flex-direction: row;
}

i {
    font-size: 3vw;
}

.loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #f4f5f6;
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
      isLoading: true,
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
    finishLoading() {
      this.isLoading = false;
    },
  },
  mounted() {
    /* this.getRosterList(); */
    /* mock service */
    setTimeout(() => this.setRosterList(mockRosters.default.rosters), 2000);
  },
};
</script>
