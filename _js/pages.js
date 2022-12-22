// definindo const uteis
const label = document.getElementById("pagelabel");
const title = document.getElementById("title");
const description = document.getElementById("title-text");
const clickhere = document.getElementById("clickhere");
let workShowing = 0;


// page 0 = home, 2 = work e 3 = contato
let page = 0;

// criando elementos
const mainframe = document.querySelector(".cabecalho");
const imagens = document.createElement("div");
imagens.setAttribute("class", "imagens");
const img = document.createElement("img")
const txtPage = document.createElement("p");
const arrow = document.createElement("img");
const homeSvg = document.getElementById("home");
const workSvg = document.getElementById("work");
const contactSvg = document.getElementById("contact");

// definindo child
imagens.appendChild(txtPage);
imagens.appendChild(img);
imagens.append(arrow);
mainframe.appendChild(imagens);

// foto inicial do meu Github
img.setAttribute("id", "img");
img.setAttribute("src", "_img/github-photo.jpeg");
img.setAttribute("alt", "nunesdotpy github photo");

// arrow do work
arrow.setAttribute("id", "arrow");
arrow.setAttribute("src", "assets/arrow.svg");
arrow.setAttribute("onclick", "nextWork()")
arrow.style.display = "none";

// função para mudança das pages
const homePage = () => {
    page = 0;
    opacityReset();
    label.innerText = "Home";
    img.setAttribute("id", "img");
    img.setAttribute("src", "_img/github-photo.jpeg");
    img.setAttribute("alt", "nunesdotpy github photo");
    title.innerText = "João Nunes";
    description.innerText = "Oi, meu nome é João Nunes, também conhecido como nunesdotpy, sou um recifense graduante em ciência da computação. Adoro desenvolvimento front-end, projetos open-source e descentralizados! Aqui você vai conhecer um pouco mais sobre mim.";
    txtPage.innerText = "";
    arrow.style.display = "none";
    clickhere.innerText = "";
}

const workPage = () => {
    page = 1;
    opacityReset();
    label.innerText = "Trabalhos";
    img.removeAttribute("id", "img")
    img.setAttribute("class", "works");
    img.setAttribute("src", "_img/work1.jpeg");
    txtPage.setAttribute("hidden","")
    txtPage.innerText = "Aqui você vai ver um pouco sobre alguns projetos que finalizei ou venho desenvolvendo";
    title.innerText = "GxN Gaming";
    description.innerText = `Site para disponibilizar servidores de jogos feito 100% em HTML, CSS e JavaScript. Função "clica e copia" ao clicar nos IPs para maior praticidade e comodidade ao usuário.`;
    arrow.style.display = "block"
    clickhere.innerText = "Clique aqui para visitar";
    clickhere.setAttribute("href", "https://gxn-network.com.br/");
    workShowing = 0;
}

const contactPage = () => {
    page = 2;
    opacityReset();
    label.innerText = "Contatos";
    txtPage.innerText = "Algumas formas de você poder entrar em contato comigo:";
    workShowing = 0;
}

const opacityReset = () => {
    switch (page){
        case 0:
            homeSvg.style.opacity = 0.5;
            workSvg.style.opacity = 1;
            contactSvg.style.opacity = 1;
            break;
        case 1:
            homeSvg.style.opacity = 1;
            workSvg.style.opacity = 0.5;
            contactSvg.style.opacity = 1;
            break;
        case 2:
            homeSvg.style.opacity = 1;
            workSvg.style.opacity = 1;
            contactSvg.style.opacity = 0.5;
            break;
    }
}

opacityReset();