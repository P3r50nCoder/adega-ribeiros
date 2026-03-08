const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const botoesFiltro = document.querySelectorAll(".filtro button");
const produtos = document.querySelectorAll(".produto");

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
        botoesFiltro.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        const categoria = botao.getAttribute("data-filtro");
        produtos.forEach(produto => {
            if (categoria === "todos" || produto.dataset.categoria === categoria) {
                produto.computedStyleMap.display = "block";
            }
             else {
                produto.style.display = "none";
            
        }
    });
        
    })
})