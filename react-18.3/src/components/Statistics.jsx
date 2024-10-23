import PropTypes from "prop-types"

export default function Statistics({ title, posts, comments, users }) {
  return (
    <div>
      <h3 className="mb-2">{title}</h3>
      <ul className="stats-list">
        <li>
          Posts: <span>{posts}</span>
        </li>
        <li>
          Comments: <span>{comments}</span>
        </li>
        <li>
          Users: <span>{users}</span>
        </li>
      </ul>
    </div>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.number,
  comments: PropTypes.number,
  users: PropTypes.number,
}
