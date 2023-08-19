import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
  state: () => {
    return { token: 'adsfdsf' }
  },

  actions: {
    setToken(token) {
      this.token = token
    },
  },
})