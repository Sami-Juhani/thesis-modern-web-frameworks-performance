export function filterData(query, _posts, _comments, _users) {
    if (query == null) return [_posts, _comments, _users]
  
    const posts = _posts.filter((p) => p.title.includes(query) || p.body.includes(query))
  
    const comments = _comments.filter((c) => c.body.includes(query) || c.name.includes(query) || c.email.includes(query))
  
    const users = _users.filter((u) => u.name.includes(query) || u.email.includes(query))
  
    return [posts, comments, users]
  }
  