const Navbar = (pagina) => {
  document.getElementById("home").style.color = "#848588";
  document.querySelector(".home").hidden = true;
  document.getElementById("work").style.color = "#848588";
  document.querySelector(".work").hidden = true;
  document.getElementById("contact").style.color = "#848588";
  document.querySelector(".contact").hidden = true;

  switch (pagina) {
    case "home":
      document.getElementById("home").style.color = "white";
      document.querySelector(".home").hidden = false;
      break;
    case "work":
      document.getElementById("work").style.color = "white";
      document.querySelector(".work").hidden = false;
      break;
    case "contact":
      document.getElementById("contact").style.color = "white";
      document.querySelector(".contact").hidden = false;
      break;
  }
};

fetch("/js/works.json").then((response) => {
  response.json().then((dados) => {
    const work = document.querySelector(".work");

    dados.projetos.forEach((projeto) => {
      work.innerHTML += `
          <div class="work_card" id="work_${projeto.id}" onclick="verMais(${projeto.id})">
            <img src="${projeto.imagem}" width="300" height="170" alt="${projeto.imagemAlt}">
            <h2>${projeto.titulo}</h2>
            <p id="verMais_${projeto.id} class="verMais">Ver Mais <i class="bi bi-arrow-right-square-fill"></i></p>
            <div hidden id="${projeto.id}">
              <p class="descricao">${projeto.descricao}</p>
              <div style="display: flex; justify-content: center">
                <a href="${projeto.link}" target="_blank" class="link">Acessar projeto</a>
              </div>
            </div>
          </div>
        `;
    });
  });
});

const verMais = (projeto) => {
  document.getElementById(projeto).style.display = "block";
  document.getElementById(`work_${projeto}`).style.height = "460px";
  document.getElementById(`verMais_${projeto}`).style.display = "none";
};

Navbar("home");
