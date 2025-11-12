document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode
});

// Check for saved dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode and save preference
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode on the body
});


