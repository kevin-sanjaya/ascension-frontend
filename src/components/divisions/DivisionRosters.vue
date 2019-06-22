<template>
<div id="division-rosters">
    <template v-if="divisionRosterList.length">
        <h3>{{ selectedDivision.name }}
            <span>Roster</span>
        </h3>
        <div class="rosters-data">
            <PlayerProfile v-for="roster in filteredRosters"
            v-bind:key="roster.id"
            v-bind:roster="roster" />
        </div>
    </template>
</div>
</template>

<style scoped>
#division-rosters {
    width: 85%;
    background-color: #11171a;
}

.rosters-data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

h3 {
    color: #f4f5f6;
    text-transform: uppercase;
    padding: 1% 0 0 1%;
    font-size: 1.5vw;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}

span {
    font-weight: bold;
    color: #faa61a;
}

@media (max-width: 1024px) {
    h3 {
        font-size: 15.36px;
    }
}
</style>

<script>
import PlayerProfile from '@/components/divisions/player-profile/PlayerProfile.vue';

export default {
  name: 'DivisionRosters',
  components: {
    PlayerProfile,
  },
  props: {
    selectedDivision: {
      type: Object,
      default: () => null,
    },
    divisionRosterList: {
      type: Array,
      default: () => null,
    },
  },
  data() {
    return {};
  },
  computed: {
    filteredRosters() {
      this.$emit('finishedLoading');
      return this.divisionRosterList.filter(data => data.teamId === this.selectedDivision.id);
    },
  },
  methods: {},
  mounted() {},
};
</script>
