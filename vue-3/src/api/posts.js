export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts/')
}

export function getPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

export function getPostsByQuery(query) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
}
