export async function getComments(signal) {
  return fetch(`https://jsonplaceholder.typicode.com/comments/`, {
    signal,
  })
}

export async function getPostComments(postId, signal) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments/`, {
    signal,
  })
}
