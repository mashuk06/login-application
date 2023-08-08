import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
});
