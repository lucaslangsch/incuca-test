<script setup>
import router from '../router';

const initFLowJoke = async () => {
  return router.push('/triste')
}
</script>

<template>
  <div class="inicial" @click="initFLowJoke">
    <h1>Inicial</h1>
  </div>
</template>
