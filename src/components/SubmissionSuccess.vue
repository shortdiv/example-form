<template>
  <div>
    <h1>Thank you for your submission!</h1>
    <div v-if="hasSubmissions">
      {{ submissions }}
    </div>
    <router-link to="/">
      <button>Back to form</button>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "SubmissionSuccess",
  computed: {
    ...mapGetters("poll", ["hasSubmissions"]),
    ...mapState("poll", {
      submissions: state => state.submissions
    })
  }
};
</script>

<style scoped>
</style>