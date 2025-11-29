// interface toDo {
// 	text: string;
// 	done: boolean;
// }

function greet(name: string): string {
	return `Hello, ${name}!`;
}
const title = document.getElementById("title");
if (title) {
	title.textContent = greet("visitor");
}