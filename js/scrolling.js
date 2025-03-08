let maxValue = document.documentElement.scrollHeight - window.innerHeight;
let currentPer = Math.floor((window.scrollY * 100) / maxValue);

window.addEventListener("scroll", () => {
   window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10
        window.location.href = 'category.html';
    }
)

