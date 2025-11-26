import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/blog">Blog</Link> | <Link to="/about"> About</Link> <p />
      <Outlet />
    </div>
  );
}

export default RootLayout;
