"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProject = showProject;
function showProject() {
    const projectSection = document.getElementById('project');
    if (projectSection) {
        projectSection.innerHTML = `
      <h2>My Projects</h2>
      <ul>
        <li>
          <strong>GitHub:</strong>
          <a href="https://github.com/TrangPham93" target="_blank" rel="noopener noreferrer">https://github.com/TrangPham93</a>
        </li>
      </ul>
    `;
    }
}
