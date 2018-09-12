<template>
  <div>
    <h1>Thank you for your submission!</h1>
    <div>
      <ul id="bars">
        <li>
          <div id="poll">
            <div id="bar-text">
              <span>{{ ghanaianPercentage }}%</span>
              <span id="bar-category">Ghanaian Jollof</span>
            </div>
            <span id="bar" :style="{ width: `${nigerianPercentage}%` }"></span>
          </div>
        </li>
        <li>
          <div id="poll">
            <div id="bar-text">
              <span>{{ nigerianPercentage }}%</span>
              <span id="bar-category">Nigerian Jollof</span>
            </div>
            <span id="bar" :style="{ width: `${nigerianPercentage}%` }"></span>
          </div>
        </li>
        <li>
          <div id="poll">
            <div id="bar-text">
              <span>{{ senegalPercentage }}%</span>
              <span id="bar-category">Senegal Jollof</span>
            </div>
            <span id="bar" :style="{ width: `${senegalPercentage}%` }"></span>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/">
      <button>Back to form</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SubmissionSuccess",
  computed: {
    ...mapGetters("poll", [
      "hasSubmissions",
      "submissionCounts",
      "totalSubmissionCount"
    ]),
    nigerianPercentage() {
      return this.makePercentage(this.submissionCounts.Nigerian);
    },
    ghanaianPercentage() {
      return this.makePercentage(this.submissionCounts.Ghanaian);
    },
    senegalPercentage() {
      return this.makePercentage(this.submissionCounts.Senegal);
    }
  },
  methods: {
    makePercentage(part, whole = this.totalSubmissionCount) {
      return Math.floor(part / whole * 100);
    }
  }
};
</script>

<style scoped lang="scss">
#bars {
  margin: 0 auto;
  max-width: 500px;
}
#poll {
  position: relative;
  text-align: left;
}
li {
  &:not(:first-child) {
    margin-top: 0.5em;
  }
}
#bar {
  position: absolute;
  height: 30px;
  width: 0;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  background-color: #3c6da752;
  transition: all 0.3s cubic-bezier(0.5, 1.2, 0.5, 1.2);
  -webkit-transition: all 0.3s cubic-bezier(0.5, 1.2, 0.5, 1.2);
}
#bar-text,
span {
  display: inline-block;
  margin: 0 10px;
  padding: 5px 0;
  font-size: 1em;
}
#bar-category {
  margin: 0 15px;
}
button {
  margin-top: 1em;
}
</style>