<template>
<div id="scrim-results">
    <div class="schedule-tile" v-if="scrimmageResults.length">
        <h3>
            <span>{{ selectedDivision.name }}</span> Scrimmage Results
        </h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Time</th>
                    <th scope="col">Opponent</th>
                    <th scope="col">Format</th>
                    <th scope="col">Results</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan="6" v-if="filteredResults.length === 0">
                    There are no schedules available.
                </td>
            </tr>
                <template v-for="(scrimmage, index) in filteredResults">
                    <tr v-bind:key="scrimmage.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ formatTime(scrimmage.match_detail.time) }}</td>
                        <td>{{ scrimmage.match_detail.opponent }}</td>
                        <td>{{ scrimmage.match_detail.format }}</td>
                        <td v-bind:style="{ color: scrimmage.win ? 'green' : 'red' }">
                            {{ scrimmage.win ? "Win" : "Lose" }}
                        </td>
                        <td><button
                            class="detail-button"
                            data-toggle="collapse"
                            v-bind:data-target="bindDataTarget(scrimmage.id, true)">
                            <i class="fas fa-angle-down"></i>
                        </button></td>
                    </tr>
                    <tr v-bind:key="index">
                        <td colspan="6" class="match-detail">
                            <div class="collapse" v-bind:id="bindDataTarget(scrimmage.id, false)">
                            Match type:
                            <span>
                                {{ scrimmage.match_detail.online ? "Online" : "LAN" }}
                            </span> <br>
                            Server region:
                                <span>{{ scrimmage.match_detail.server }}</span> <br>
                            Additional info:
                            <span>
                                {{ scrimmage.match_detail.info ?
                                    scrimmage.match_detail.info : "-" }}
                            </span>
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
#scrim-results {
    width: 35%;
    padding: 1% 0 0 1%;
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
    outline: none;
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
  name: 'ScrimResults',
  components: {},
  props: {
    scrimmageResults: {
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
    filteredResults() {
      this.$emit('finishedLoading');
      return this.scrimmageResults
        .filter(data => data.match_detail.teamId === this.selectedDivision.id);
    },
  },
  methods: {
    formatTime(time) {
      return `${new Date(time).toLocaleDateString()} ${new Date(time).toLocaleTimeString()}`;
    },
    bindDataTarget(index, button) {
      return button ? `#match-detail${index}` : `match-detail${index}`;
    },
  },
  mounted() {},
};
</script>
