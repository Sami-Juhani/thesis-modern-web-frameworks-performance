<script setup>
import { ref, watch } from 'vue'

import PostCard from '@/components/PostCard.vue'
import UserCard from '@/components/UserCard.vue'
import Comment from '@/components/Comment.vue'
import Statistics from '@/components/Statistics.vue'

import { getPosts } from '@/api/posts'
import { getComments } from '@/api/comments'
import { getUsers } from '@/api/users'
import { filterData } from '@/lib/utils'

const queryRef = ref(null)
const posts = ref(null)
const comments = ref(null)
const users = ref(null)
const filteredPosts = ref(null)
const filteredComments = ref(null)
const filteredUsers = ref(null)

watch(queryRef, q => fetchData(q), { immediate: true })

async function fetchData(q) {
  try {
    const postPromise = getPosts()
    const commentPromise = getComments()
    const userPromise = getUsers()

    const [postRes, commentRes, userRes] = await Promise.all([
      postPromise,
      commentPromise,
      userPromise
    ])

    posts.value = await postRes.json()
    comments.value = await commentRes.json()
    users.value = await userRes.json()

    const [_filteredPosts, _filteredComments, _filteredUsers] = filterData(
      q,
      posts.value,
      comments.value,
      users.value
    )

    filteredPosts.value = _filteredPosts
    filteredComments.value = _filteredComments
    filteredUsers.value = _filteredUsers
  } catch (err) {
    console.log(err.toString())
  }
}
</script>

<template>
  <div>
    <div class="post-header">
      <form class="form">
        <input
          type="search"
          class="post-input"
          placeholder="search for post"
          v-model="queryRef"
        />
        <button class="btn" type="submit">Filter</button>
      </form>
      <div class="flex">
        <Statistics
          title="Stats"
          :posts="posts.length"
          :comments="comments.length"
          :users="users.length"
        />
        <Statistics
          title="Filtered Stats"
          :posts="filteredPosts.length"
          :comments="filteredComments.length"
          :users="filteredUsers.length"
        />
      </div>
    </div>

    <h2 class="page-title">Posts</h2>
    <div class="post-container">
      <PostCard
        v-for="(post, i) in filteredPosts"
        :key="post.id"
        v-bind="post"
        :image="`https://picsum.photos/1000/1000?random=${i}`"
      />
    </div>

    <h2 class="page-title">Users</h2>
    <div class="card-grid">
      <UserCard v-for="user in filteredUsers" :key="user.id" :user="user" />
    </div>

    <h2 class="page-title">Comments</h2>
    <div class="card-stack">
      <Comment
        v-for="comment in filteredComments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>
