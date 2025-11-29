"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showAbout = showAbout;
function showAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.innerHTML = `
      <h2>About me</h2>
      <p> 
        A swimmie 🧜‍♀️, a jogi 🧘‍♀️, a newbie in crocheting 🧶.<br/>
        I'm currently attending Hive Coding School. <br/>
        I hold a master's degree in finance and worked 5 years as a financial controller. <br/>
        I worked intensively with financial data daily, understood and translated data to insightful and understandable reports. <br/>
        I like to explore alternative solutions to automate repetitive tasks and increase time to brainstorm other pending problems.
      </p>
    `;
    }
}
