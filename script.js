

// =========================
// Scroll To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";

topBtn.style.bottom = "30px";

topBtn.style.right = "30px";

topBtn.style.width = "55px";

topBtn.style.height = "55px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.background = "#FFD700";

topBtn.style.color = "#000";

topBtn.style.fontSize = "22px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.4)";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// =========================
// Console Welcome
// =========================

console.log("====================================");
console.log("Portfolio Developed by Selva Vignesh C");
console.log("Luxury Glassmorphism Portfolio");
console.log("====================================");