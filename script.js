const sections = document.querySelectorAll("section");
let current = 0;
let isScrolling = false;

function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    const target = sections[index].offsetTop;
    lenis.scrollTo(target, {
        onComplete: () => {
            isScrolling = false;
        },
    });
}

// کیبورد
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (isScrolling) return;
    if (e.key === "ArrowDown") {
        current = Math.min(current + 1, sections.length - 1);
        scrollToSection(current);
    } else if (e.key === "ArrowUp") {
        current = Math.max(current - 1, 0);
        scrollToSection(current);
    }
});

// موس
// غلتک موس با debounce کوچک
document.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            current = Math.min(current + 1, sections.length - 1);
        } else if (e.deltaY < 0) {
            current = Math.max(current - 1, 0);
        }
        scrollToSection(current);
    }, 50);
});
