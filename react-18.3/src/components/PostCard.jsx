import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function PostCard({ id, title, body, image }) {
  return (
    <Link className="post-card" to={`/posts/${id}`}>
      <div className="img-container">
        <img className="post-card-img" src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
    </Link>
  )
}

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
}
