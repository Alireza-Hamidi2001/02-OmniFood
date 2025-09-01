const sections = document.querySelectorAll("section");
let currentSection = 0;
let isScrolling = false;

function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSection = index;

    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}

window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0) {
        scrollToSection(currentSection - 1);
    }
});

window.addEventListener("keydown", (e) => {
    if (isScrolling) return;

    if (e.key === "ArrowDown") {
        scrollToSection(currentSection + 1);
    } else if (e.key === "ArrowUp") {
        scrollToSection(currentSection - 1);
    }
});
