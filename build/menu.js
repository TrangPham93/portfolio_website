"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpMenu = setUpMenu;
function setUpMenu() {
    const links = Array.from(document.querySelectorAll('nav.top-nav a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll('main.content section[id]'));
    if (sections.length === 0)
        return;
    function showSectionById(id) {
        sections.forEach((sec) => {
            sec.classList.toggle("hidden", sec.id !== id);
        });
        links.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
    }
    links.forEach((a) => {
        a.addEventListener("click", (ev) => {
            ev.preventDefault();
            const href = a.getAttribute("href") || "";
            const id = href.startsWith("#") ? href.substring(1) : href;
            if (!id)
                return;
            showSectionById(id);
            history.replaceState(null, "", `#${id}`);
        });
    });
    const initialId = (location.hash && location.hash.substring(1)) ||
        (sections.length > 0 && sections[0] ? sections[0].id : "");
    showSectionById(initialId);
}
