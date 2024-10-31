import React from "react"

import Home from "./pages/Home"
import PostList from "./pages/PostList"
import UserList from "./pages/UserList"
import Post from "./pages/Post"
import User from "./pages/User"

import { getComments, getPostComments } from "./lib/comments"
import { getPost, getPosts } from "./lib/posts"
import { getUser, getUserPosts, getUsers } from "./lib/users"

// home

async function homeLoader({ request: { signal, url } }) {
  try {
    const searchParams = new URL(url).searchParams
    const query = searchParams.get("query")

    const postPromise = getPosts(signal)
    const commentPromise = getComments(signal)
    const userPromise = getUsers(signal)

    const [postRes, commentRes, userRes] = await Promise.all([postPromise, commentPromise, userPromise])

    const posts = await postRes.json()
    const comments = await commentRes.json()
    const users = await userRes.json()

    return { posts, comments, users, searchParams: { query } }
  } catch (error) {
    console.log(error.message)
  }
}

export const homeRoute = { element: <Home />, loader: homeLoader }

// post list

async function postsListloader({ request: { signal } }) {
  try {
    const postPromise = await getPosts(signal)

    const posts = await postPromise.json()

    return posts
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export const postListRoute = {
  element: <PostList />,
  loader: postsListloader,
}

// user list

async function userListLoader({ request: { signal } }) {
  try {
    const promise = await getUsers(signal)

    const users = await promise.json()

    return users
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export const userListRoute = {
  element: <UserList />,
  loader: userListLoader,
}

// a post

async function postListloader({ request: { signal }, params: { postId } }) {
  try {
    const commentsPromise = getPostComments(postId, signal)
    const postPromise = getPost(postId, signal)

    const postRes = await postPromise
    const post = await postRes.json()
    const userPromise = getUser(post.userId, signal)

    const [commentsRes, userRes] = await Promise.all([commentsPromise, userPromise])
    const comments = await commentsRes.json()
    const user = await userRes.json()

    return { comments, post, user }
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export const postRoute = {
  element: <Post />,
  loader: postListloader,
}

// a user

async function userLoader({ request: { signal }, params: { userId } }) {
  try {
    const userPromise = await getUser(userId, signal)
    const postsPromise = await getUserPosts(userId, signal)

    const [userRes, postsRes] = await Promise.all([userPromise, postsPromise])

    const user = await userRes.json()
    const posts = await postsRes.json()

    return { user, posts }
  } catch (error) {
    console.log(error.message)
  }
}

export const userRoute = { element: <User />, loader: userLoader }
