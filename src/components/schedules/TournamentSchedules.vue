<template>
<div id="tournament-schedules">
    <div class="schedule-tile" v-if="tournamentSchedules.length">
        <h3>Upcoming
            <span>{{ selectedDivision.name }}</span> Tournament
        </h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Time</th>
                    <th scope="col">Opponent</th>
                    <th scope="col">League</th>
                    <th scope="col">Format</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="5" v-if="filteredSchedules.length === 0">
                    There are no schedules available.
                </td>
            </tr>
                <template v-for="(tournament, index) in filteredSchedules">
                    <tr v-bind:key="tournament.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ formatTime(tournament.time) }}</td>
                        <td>{{ tournament.opponent }}</td>
                        <td>{{ tournament.league }}</td>
                        <td>{{ tournament.format }}</td>
                        <td><button
                            class="detail-button"
                            data-toggle="collapse"
                            v-bind:data-target="bindDataTarget(tournament.id, true)">
                            <i class="fas fa-angle-down"></i>
                        </button></td>
                    </tr>
                    <tr v-bind:key="index">
                        <td colspan="6" class="match-detail">
                            <div class="collapse" v-bind:id="bindDataTarget(tournament.id, false)">
                                    Match type:
                                    <span>{{ tournament.online ? "Online" : "LAN" }}</span> <br>
                                    Server region:
                                    <span>
                                        {{ tournament.server ? tournament.server : "-" }}
                                    </span> <br>
                                    League info:
                                    <span><a v-bind:href="tournament.leagueUrl">Link</a></span> <br>
                                    Bracket:
                                    <span>{{ tournament.bracket }}</span> <br>
                                    Additional info:
                                    <span>{{ tournament.info ? tournament.info : "-" }}</span>
                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</div>
</template>

<style scoped>
#tournament-schedules {
    width: 50%;
    padding: 1%;
    background-color: #11171a;
}

.schedule-tile {
    background-color: #11171a;
    border-top: 4px solid #faa61a;
    border-bottom: 20px solid #faa61a;
}

td.match-detail {
    text-align: left;
    padding-top: 0;
    padding-bottom: 10px;
}

.collapse {
    border-left: 4px solid #faa61a;
    padding-left: 3%;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
}

button.detail-button {
    border-radius: 50%;
    border: none;
    color: #faa61a;
    background-color: #11171a;
}

h3 {
    text-transform: uppercase;
    margin: 5px;
    text-align: center;
    color: #f4f5f6;
    font-size: 1.5vw;
}

span {
    color: #faa61a;
}

a {
    color: #faa61a;
}

table,
td {
    text-align: center;
    color: #f4f5f6;
    border-top: none;
    border-bottom: none;
    font-size: 0.8vw;
    margin-bottom: 0;
}

@media (max-width: 1024px) {
    h3 {
        font-size: 15.36px;
    }
    table {
        font-size: 8.192px;
    }
}
</style>

<script>
export default {
  name: 'TournamentSchedules',
  components: {},
  props: {
    tournamentSchedules: {
      type: Array,
      default: () => null,
    },
    selectedDivision: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {};
  },
  computed: {
    filteredSchedules() {
      this.$emit('finishedLoading');
      return this.tournamentSchedules.filter(data => data.teamId === this.selectedDivision.id);
    },
  },
  methods: {
    formatTime(time) {
      return `${new Date(time).toLocaleDateString('en-GB')} ${new Date(time).toLocaleTimeString()}`;
    },
    bindDataTarget(index, button) {
      return button ? `#match-detail${index}` : `match-detail${index}`;
    },
  },
  mounted() {},
};
</script>
