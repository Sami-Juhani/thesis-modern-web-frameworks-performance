export function getPosts(signal) {
  return fetch("https://jsonplaceholder.typicode.com/posts/", {
    signal,
  })
}

export function getPost(postId, signal) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    signal,
  })
}

export function getPostsByQuery(query, signal) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`, {
    signal,
  })
}
