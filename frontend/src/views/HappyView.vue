<template>
  <div class="happy">
    <h1>Feliz</h1>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        color="blue"
      >
        <v-card-text>
          <h1>{{jokeS}}</h1>
        </v-card-text>
        <v-btn color="blue" block @click="dialog = false">Close Dialog</v-btn>
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
      }
    },
    watch: {
        dialog() {
        router.push('/inicial')
      },
    },
  }
</script>

<style scoped>
  .happy {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
</style>