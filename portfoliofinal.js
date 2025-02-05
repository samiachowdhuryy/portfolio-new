document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-bar");

    function animateBars() {
        progressBars.forEach((bar) => {
            let width = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }

    // Trigger animation when section is visible
    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateBars();
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".skills-section"));
});
