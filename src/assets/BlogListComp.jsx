function BlogList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3 className="post-heading">{post.title}</h3>
          <p className="post-paragraph">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;