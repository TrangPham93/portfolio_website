"use strict";
// interface toDo {
// 	text: string;
// 	done: boolean;
// }
function greet(name) {
    return `Hello, ${name}!`;
}
const title = document.getElementById("title");
if (title) {
    title.textContent = greet("visitor");
}
