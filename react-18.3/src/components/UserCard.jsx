import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function UserCard({ user }) {
  return (
    <div className="card">
      <div className="card-header">{user.name}</div>
      <div className="card-body">
        <div>{user.company.name}</div>
        <div>{user.website}</div>
        <div>{user.email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={user.id.toString()}>
          View
        </Link>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  user: PropTypes.object,
}
