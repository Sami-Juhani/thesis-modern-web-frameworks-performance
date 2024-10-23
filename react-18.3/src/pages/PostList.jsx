import { useLoaderData } from "react-router-dom"
import PostCard from "../components/PostCard"

export default function PostList() {
  const posts = useLoaderData()

  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="post-container">
        {posts.map((post, i) => (
          <PostCard key={post.id} {...post} image={`https://picsum.photos/1000/1000?random=${i}`} />
        ))}
      </div>
    </>
  )
}
