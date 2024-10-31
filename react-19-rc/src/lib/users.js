export async function getUsers(signal) {
  return fetch(`https://jsonplaceholder.typicode.com/users/`, {
    signal,
  })
}

export async function getUser(userId, signal) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    signal,
  })
}

export async function getUserPosts(userId, signal) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
    signal,
  })
}
