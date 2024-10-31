<script setup>
import { ref, onMounted } from 'vue'
import { getUsers } from '@/api/users'

const users = ref([])

const fetchUsers = async () => {
  try {
    const usersRes = await getUsers()
    users.value = await usersRes.json()
  } catch (error) {
    console.error("Error fetching users:", error.message)
  }
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div>
    <h1 class="page-title">Users</h1>

    <div class="card-grid">
      <div v-for="user in users" :key="user.id" class="card">
        <div class="card-header">{{ user.name }}</div>
        <div class="card-body">
          <div>{{ user.company.name }}</div>
          <div>{{ user.website }}</div>
          <div>{{ user.email }}</div>
        </div>
        <div class="card-footer">
          <RouterLink class="btn" :to="`/users/${user.id}`">
            View
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>