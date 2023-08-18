<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="form__input">
      <label for="email">
        Email
      </label>
      <input type="email" name="email" id="email" v-model="email" placeholder="Digite seu email:">
    </div>

    <div class="form__input">
      <label for="password">
        Password
      </label>
      <input :type="passwordType" name="password" id="password" v-model="password" placeholder="Digite seu password:">
      <button type="button" @click="switchVisibility">show / hide</button>
    </div>
    <strong v-show="errorLogin">{{errorLogin}}</strong>
    <button>Login</button>
  </form>
</template>

<script>
import fetchFunctions from '../utils/fetchFunctions'
import router from '../router';
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordType: 'password',
      errorLogin: false
    };
  },
  methods: {
    switchVisibility() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    async submitForm() {
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        const response = await fetchFunctions.fetchLogin(formData)
        const data = await response.json()
        if (response.status === 200) {
          router.push('/inicial')
        }
        this.errorLogin = data.message
        this.email = ''
        this.password = ''
        this.passwordType = 'password'
        throw new Error(response.status)
      } catch (error) {
        console.error(error)
      }
    }
  },
}
</script>