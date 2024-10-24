<script setup>
import { ref, onMounted } from 'vue'
import PostCard from '@/components/PostCard.vue'
import { getPosts } from '@/api/posts'

const posts = ref(null)

onMounted(async () => {
  try {
    const postRes = await getPosts()
    posts.value = await postRes.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})
</script>

<template>
  <div>
    <h1 class="page-title">Posts</h1>
    <div class="post-container">
      <PostCard
        v-for="(post, i) in posts"
        :key="post.id"
        v-bind="post"
        :image="`https://picsum.photos/1000/1000?random=${i}`"
      />
    </div>
  </div>
</template>
