export function showBlog() {
  const blogSection = document.getElementById('blog') as HTMLElement;

  if (blogSection) {
    blogSection.innerHTML = `
      <h2>Blog</h2>
      <p>This is where the blog content will go.</p>
    `;
  }
}
