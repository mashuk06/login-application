<script setup>
    import { useAuthStore } from '../stores/authStore'

    const authStore = useAuthStore()
</script>
<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="bg-indigo-500 rounded-lg shadow-lg p-6 mt-8">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-white mb-4">
          Welcome to the dashboard, {{ authStore.name }}
        </h2>
      </div>
    </div>
  </div>
</template>
