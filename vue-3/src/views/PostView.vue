<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPost } from '@/api/posts' 
import { getPostComments } from '@/api/comments';
import { getUser } from '@/api/users';

const post = ref({})
const comments = ref([])
const user = ref({})

const fetchPostData = async (postId) => {
  try {
    const commentsPromise = getPostComments(postId)
    const postPromise = getPost(postId,)

    const postRes = await postPromise
    const postData = await postRes.json()

    const userPromise = getUser(postData.userId)
    const [commentsRes, userRes] = await Promise.all([commentsPromise, userPromise])

    const commentData = await commentsRes.json()
    const userData = await userRes.json()


    post.value = postData
    comments.value = commentData
    user.value = userData
  } catch (error) {
    console.error("Error fetching data:", error.message)
  }
}

const route = useRoute()

onMounted(() => {
  const postId = route.params.id

  fetchPostData(postId)
})
</script>

<template>
    <div>

      <h1 class="page-title">{{ post.title }}</h1>
  
      <span class="page-subtitle">
        By: <router-link :to="`/users/${user.id}`">{{ user.name }}</router-link>
      </span>

      <div>{{ post.body }}</div>

      <h3 class="mt-4 mb-2">Comments</h3>
      <div v-if="comments.length" class="card-stack">
        <div v-for="comment in comments" :key="comment.id" class="card">
          <div class="card-body">
            <div class="text-sm mb-1">{{ comment.email }}</div>
            {{ comment.body }}
          </div>
        </div>
      </div>
      <div v-else>No comments available</div>
    </div>
  </template>
