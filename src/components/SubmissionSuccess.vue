<template>
  <div>
    <h1>Thank you for your submission!</h1>
    <div v-if="hasSubmissions">
      {{ sortSubmissions }}
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
    ...mapGetters("poll", ["hasSubmissions", "sortSubmissions"])
  }
};
</script>

<style scoped>
</style>