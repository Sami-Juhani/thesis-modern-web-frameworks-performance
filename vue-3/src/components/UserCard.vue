<template>
  <div class="card">
    <div class="card-header">{{ user.name }}</div>
    <div class="card-body">
      <div>{{ user.company.name }}</div>
      <div>{{ user.website }}</div>
      <div>{{ user.email }}</div>
    </div>
    <div class="card-footer">
      <router-link class="btn" :to="user.id.toString()"> View </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
