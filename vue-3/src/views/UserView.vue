<script setup>
import { ref, onMounted } from 'vue'
import { getUser, getUserPosts } from '@/api/users'
import PostCard from '@/components/PostCard.vue'
import { useRoute } from 'vue-router'

const user = ref(null)
const posts = ref([])

const route = useRoute()

const fetchUserData = async () => {
  try {
    const userId = route.params.id
    const userRes = await getUser(userId)
    const postsRes = await getUserPosts(userId)
    
    user.value = await userRes.json()
    posts.value = await postsRes.json()
  } catch (error) {
    console.error("Error fetching user or posts:", error.message)
  }
}

onMounted(() => {
  fetchUserData()
})
</script>

<template>
  <div>
    <h1 class="page-title">{{ user?.name }}</h1>
    <div class="page-subtitle">{{ user?.email }}</div>
    <div>
      <b>Company:</b> {{ user?.company.name }}
    </div>
    <div>
      <b>Website:</b> {{ user?.website }}
    </div>
    <div>
      <b>Address:</b> {{ user?.address.street }} {{ user?.address.suite }} {{ user?.address.city }} {{ user?.address.zipcode }}
    </div>

    <h3 class="mt-4 mb-2">Posts</h3>
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
