let liens=document.querySelectorAll("a");
let p = document.querySelector("p");

liens.forEach(lien => {
 
    if (lien.textContent === "Masquer") {
        lien.addEventListener('click', () => {
            p.style.display = "none";
        })
    } else {
        lien.addEventListener('click', () => {
            p.style.display = "block";
        })
    }
}
)

