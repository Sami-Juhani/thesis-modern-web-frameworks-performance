<script setup>
import { ref } from 'vue'

import PostCard from '@/components/PostCard.vue'
import UserCard from '@/components/UserCard.vue'
import Comment from '@/components/Comment.vue'
import Statistics from '@/components/Statistics.vue'

import { getPosts } from '@/api/posts'
import { getComments } from '@/api/comments'
import { getUsers } from '@/api/users'
import { filterData } from '@/lib/utils'

const queryRef = ref('')
const posts = ref([])
const comments = ref([])
const users = ref([])

const filteredPosts = ref([])
const filteredComments = ref([])
const filteredUsers = ref([])

const fetchData = async () => {
  try {
    const [postRes, commentRes, userRes] = await Promise.all([
      getPosts(),
      getComments(),
      getUsers()
    ])

    posts.value = await postRes.json()
    comments.value = await commentRes.json()
    users.value = await userRes.json()

    filteredPosts.value = posts.value
    filteredComments.value = comments.value
    filteredUsers.value = users.value
  } catch (err) {
    console.log(err.toString())
  }
}

fetchData()

const handleSubmit = () => {
  const [_filteredPosts, _filteredComments, _filteredUsers] = filterData(
    queryRef.value,
    posts.value,
    comments.value,
    users.value
  )

  filteredPosts.value = _filteredPosts
  filteredComments.value = _filteredComments
  filteredUsers.value = _filteredUsers
}
</script>

<template>
  <div>
    <img class='hero-image' src='https://picsum.photos/id/1/1000/1000' alt='hero-image' />
    <div class="post-header">
      <form class="form" @submit.prevent="handleSubmit">
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
