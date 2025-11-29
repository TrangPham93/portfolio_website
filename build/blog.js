"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBlog = showBlog;
function showBlog() {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
        blogSection.innerHTML = `
      <h2>Blog</h2>
      <p>This is where the blog content will go.</p>
    `;
    }
}
