function Header() {
  return (
    <header className="blog-header">
      <h1>My Awesome Blog</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Blog</a>
          </li>
          <li>
            <a href="/posts/new">New Post</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
