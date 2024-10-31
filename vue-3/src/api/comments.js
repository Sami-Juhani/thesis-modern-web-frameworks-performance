export async function getComments() {
  return fetch(`https://jsonplaceholder.typicode.com/comments/`)
}

export async function getPostComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments/`)
}
