import PropTypes from "prop-types"
import { useEffect } from "react"
import { useState } from "react"

export default function Statistics({ title, posts, comments, users }) {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString())

  useEffect(() => {
    setCurrentDate(new Date().toISOString())
  })

  return (
    <div>
      <h3 className="mb-2">{title}</h3>
      <h4 className="mb-2">Updated at: {currentDate}</h4>
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
