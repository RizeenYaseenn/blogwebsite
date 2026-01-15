// Read More toggle
function readMore(btn) {
    const text = btn.previousElementSibling;
    if (btn.innerText === "Read More") {
        text.innerText += " Consistent practice and real projects are the key to mastery.";
        btn.innerText = "Read Less";
    } else {
        text.innerText = text.innerText.split(" Consistent")[0];
        btn.innerText = "Read More";
    }
}

// Dark mode
const toggle = document.getElementById("toggleMode");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Search blogs
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let blogs = document.querySelectorAll(".blog-card");

    blogs.forEach(blog => {
        blog.style.display = blog.innerText.toLowerCase().includes(value)
            ? "block"
            : "none";
    });
});
