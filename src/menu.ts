export function setUpMenu(): void {
  const links = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('nav.top-nav a[href^="#"]')
  );

  const sections = Array.from(
    document.querySelectorAll<HTMLElement>('main.content section[id]')
  );

  if (sections.length === 0) return;

  function showSectionById(id: string) {
  console.log("Target ID:", id);
  sections.forEach((sec) => {
    const shouldHide = sec.id !== id;
    sec.classList.toggle("hidden", shouldHide);
    console.log(sec.id, "shouldHide:", shouldHide, "has hidden:", sec.classList.contains("hidden"));
  });
	}


  links.forEach((a) => {
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      const href = a.getAttribute("href") || "";
      const id = href.startsWith("#") ? href.substring(1) : href;

      if (!id) return;
      showSectionById(id);

      history.replaceState(null, "", `#${id}`);
    });
  });

 const initialId =
  (location.hash && location.hash.substring(1)) ||
  (sections.length > 0 && sections[0] ? sections[0].id : "");

if (initialId) {
  showSectionById(initialId);
}

}
