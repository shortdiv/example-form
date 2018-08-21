<template>
  <div>
    <h2>What jollofin at? Pick the best Jollof in the land.</h2>
    <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
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
  export default {
    name: 'JollofForm',
    data () {
      return {
        jollofTypes: ['Ghanaian Jollof', 'Nigerian Jollof', 'Senegal Jollof'],
        form: {
          chosenRice: "Senegal Jollof"
        },
      }
    },
    mounted () {
    },
    methods: {
      encode (data) {
        return Object.keys(data)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join('&')
      },
      handleSubmit () {
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            'form-name': 'jollof-wars',
            'JollofTypes': this.form.chosenRice
          })
        })
        .then(() => {
          this.$router.push('thanks')
        })
        .catch(() => {
          this.$router.push('404')
        })
      }
    }
  }
</script>

<style scoped>
li {
  list-style: none;
}
span {
  font-size: 1.35em;
  font-weight: 300;
}
</style>