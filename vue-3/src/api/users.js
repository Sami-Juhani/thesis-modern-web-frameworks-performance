export async function getUsers() {
  return fetch(`https://jsonplaceholder.typicode.com/users/`)
}

export async function getUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

export async function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
}
