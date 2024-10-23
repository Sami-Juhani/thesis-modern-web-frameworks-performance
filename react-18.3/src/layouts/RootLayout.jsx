import { Link, Outlet, ScrollRestoration } from "react-router-dom"

export function RootLayout() {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">React and modern web frameworks: A comparison of performance - React 18.3</div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
