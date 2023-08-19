<template>
  <div class="pokerFace">
    <h1>Poker Face</h1>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        color="blue"
      >
        <v-card-text>
          <h1>{{jokeS}}</h1>
          <h3>Happiness Meter</h3>
          <v-progress-linear
            color="white"
            v-model="value"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import router from '../router'
import { useJokeStore } from '../stores/joke'
  export default {
    data() {
      return {
        dialog: true,
        jokeS: useJokeStore().joke,
        value: 0,
      }
    },

    mounted() {
      setTimeout(() => (this.dialog = false, router.push('/')), 5000)
      setInterval(() => {this.value += 0.5}, 25)
    },    
  }
</script>