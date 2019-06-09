<template>
<div id="division-rosters">
    <template v-if="divisionRosterList">
        <h3>{{ selectedDivision }}
            <span>Roster</span>
        </h3>
        <div class="rosters-data">
            <PlayerProfile
                v-for="roster in divisionRosterList"
                v-bind:key="roster.id"
                v-bind:roster="roster" />
        </div>
    </template>
     <template v-if="!divisionRosterList">
        <div class="loading-spinner">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    </template>
</div>
</template>

<style scoped>
#division-rosters {
    width: 85%;
}

.rosters-data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

h3 {
    text-transform: uppercase;
    padding: 1% 0 0 1%;
    font-size: 1.5vw;
}

span {
    font-weight: bold;
    color: #faa61a;
}

i {
    font-size: 60px;
}

.loading-spinner {
    margin: 20% 0 0 40%;
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
    selectedDivision: String,
    divisionRosterList: {
      default: null,
      type: Array,
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
