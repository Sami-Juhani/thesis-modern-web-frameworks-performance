<template>
  <RouterLink class="post-card" :to="`/posts/${id}`">
    <div class="img-container">
      <img class="post-card-img" :src="image" :alt="title" />
    </div>
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
  </RouterLink>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>