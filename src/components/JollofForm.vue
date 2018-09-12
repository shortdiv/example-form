<template>
  <div>
    <h2>What jollofin at? Pick the best Jollof in the land.</h2>
    <form name="jollof-wars" method="post" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="jollof-wars" />
      <ul>
        <li v-for="(jollof, index) in jollofTypes" :key="index">
          <label>
            <input
              type="radio"
              name="jollof"
              :value="jollof"
              :checked="jollof === form.chosenRice"
              @input="ev => form.chosenRice = ev.target.value"
            >
            <span>{{ jollof }}</span>
          </label>
        </li>
      </ul>
      <button type="submit">Select your fighter</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "JollofForm",
  data() {
    return {
      jollofTypes: ["Ghanaian Jollof", "Nigerian Jollof", "Senegal Jollof"],
      form: {
        chosenRice: "Senegal Jollof"
      }
    };
  },
  methods: {
    ...mapActions("poll", ["fetchSubmissions", "postSubmission"]),
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      this.postSubmission(
        this.encode({
          "form-name": "jollof-wars",
          jollof: this.form.chosenRice
        })
      )
        .then(res => {
          this.$router.push("thanks");
        })
        .catch(res => {
          this.$router.push("404");
        });
      // fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: this.encode({
      //     "form-name": "jollof-wars",
      //     jollof: this.form.chosenRice
      //   })
      // }, )
      //   .then(res => {
      //     debugger;
      //     this.postSubmission();
      //   })
      //   .catch(() => {
      //     //this.$router.push("404");
      //   });
    }
  },
  created() {
    this.fetchSubmissions();
  }
};
</script>

<style>
button {
  text-align: center;
}
li {
  list-style: none;
}
ul {
  text-align: center;
  padding: 0;
}
span {
  font-size: 1.35em;
  font-weight: 300;
}
button {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  position: relative;
  display: block;
  margin: 0 auto;
  position: relative;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
  outline: none;
  padding: 10px 37px;
  background-color: #3eb882;
}
</style>
