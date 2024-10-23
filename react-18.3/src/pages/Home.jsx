import { Form, useLoaderData } from "react-router-dom"
import { useEffect, useRef } from "react"

import PostCard from "../components/PostCard"
import Statistics from "../components/Statistics"
import UserCard from "../components/UserCard"
import Comment from "../components/Comment"

import { filterData } from "../lib/utils"

export default function Home() {
  const {
    posts,
    comments,
    users,
    searchParams: { query },
  } = useLoaderData()
  const queryRef = useRef()

  useEffect(() => {
    queryRef.current.value = query || ""
  }, [query])

  const [filteredPosts, filteredComments, filteredUsers] = filterData(query, posts, comments, users)

  return (
    <>
      <div className="post-header">
        <Form className="form">
          <input
            type="search"
            name="query"
            id="query"
            className="post-input"
            placeholder="search for post"
            ref={queryRef}
          />
          <button className="btn">Filter</button>
        </Form>
        <div className="flex">
          <Statistics title="Stats" posts={posts.length} comments={comments.length} users={users.length} />
          <Statistics
            title="Filtered Stats"
            posts={filteredPosts.length}
            comments={filteredComments.length}
            users={filteredUsers.length}
          />
        </div>
      </div>

      <h2 className="page-title">Posts</h2>
      <div className="post-container">
        {filteredPosts.map((post, i) => (
          <PostCard key={post.id} {...post} image={`https://picsum.photos/1000/1000?random=${i}`} />
        ))}
      </div>

      <h2 className="page-title">Users</h2>
      <div className="card-grid">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <h2 className="page-title">Comments</h2>
      <div className="card-stack">
        {filteredComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  )
}
