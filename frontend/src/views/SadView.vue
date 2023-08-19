<script setup>
import { getToken } from '../utils/localStorageFunctions';
import { fetchJoke } from '../utils/fetchFunctions'
import { useJokeStore } from '../stores/joke'
import router from '../router';

const getJoke = async () => {
  const jokeStore = useJokeStore()
  const token = getToken()
  try {
    const response = await fetchJoke(token)
    const data = await response.json()
    if (response.status === 200) {
      jokeStore.joke = data.joke
      return router.push('/poker-face')
    }
    throw new Error(response.status)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="inicial" @click="getJoke">
    <h1>Triste</h1>
  </div>
</template>