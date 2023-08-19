import { defineStore } from 'pinia'

export const useJokeStore = defineStore('joke', {
  state: () => {
    return { joke: 'jokeNull' }
  },

  actions: {
    setJoke(joke) {
      this.joke = joke
    },
  },
})