<script setup>
  import { useAuthStore } from '../stores/authStore'
  import { ref } from "vue"
  import { useRouter } from 'vue-router';

  const router = useRouter()
  const success = ref(false)
  const authStore = useAuthStore()
  const handleRegistration = () => {
    console.log('Registration data:', authStore.$state);
    success.value = true
    setTimeout(() => {
      success.value = false
      router.push('/login')
    }, 2000)
  };
</script>
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">Sign up to your account
      </h2>
      <h4 v-if="success" class="mt-10 text-center text-l font-bold leading-9 tracking-tight text-gray-200">Registration
        has been successful !</h4>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleRegistration">
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-200">Full name</label>
          <div class="mt-2">
            <input id="name" v-model="authStore.name" type="text" required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-200">Email address</label>
          <div class="mt-2">
            <input id="email" v-model="authStore.email" type="email" autocomplete="email" required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-200">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" v-model="authStore.password" type="password" autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-200">Confirm
              Password</label>
          </div>
          <div class="mt-2">
            <input id="comfirm-password" v-model="authStore.confirmPassword" type="password"
              autocomplete="current-password" required=""
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
            in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
