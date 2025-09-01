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

// --- Desktop Scroll (Mouse Wheel) ---
window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else if (e.deltaY < 0) {
        scrollToSection(currentSection - 1);
    }
});

// --- Keyboard Arrows ---
window.addEventListener("keydown", (e) => {
    if (isScrolling) return;

    if (e.key === "ArrowDown") {
        scrollToSection(currentSection + 1);
    } else if (e.key === "ArrowUp") {
        scrollToSection(currentSection - 1);
    }
});

// --- Mobile Touch (Swipe Detection) ---
let touchStartY = 0;
let touchEndY = 0;

window.addEventListener("touchstart", (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

window.addEventListener("touchend", (e) => {
    touchEndY = e.changedTouches[0].screenY;

    if (isScrolling) return;

    if (touchStartY - touchEndY > 50) {
        // swipe up → section بعدی
        scrollToSection(currentSection + 1);
    } else if (touchEndY - touchStartY > 50) {
        // swipe down → section قبلی
        scrollToSection(currentSection - 1);
    }
});
