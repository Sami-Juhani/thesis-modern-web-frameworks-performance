import PropTypes from "prop-types"

export default function Comment({ comment }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-sm mb-1">{comment.email}</div>
        {comment.body}
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object,
}
