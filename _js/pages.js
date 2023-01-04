// definindo const uteis
const label = document.getElementById("pagelabel");
const title = document.getElementById("title");
const description = document.getElementById("title-text");
const clickhere = document.getElementById("clickhere");
const email = "contato@nunesdotpy.com";
clickhere.innerText = "Clique aqui para visitar";
let workShowing = 0;


// page 0 = home, 2 = work e 3 = contato
let page = 0;
workShowing = 0;

// criando elementos
const mainframe = document.querySelector(".cabecalho");
const contatos = document.createElement("div");
contatos.setAttribute("class","social-medias");
contatos.style.display = "none";
const imagens = document.createElement("div");
imagens.setAttribute("class", "imagens");
const img = document.createElement("img")
const txtPage = document.createElement("p");
const arrow = document.createElement("img");
const homeSvg = document.getElementById("home");
const workSvg = document.getElementById("work");
const contactSvg = document.getElementById("contact");

// definindo child
imagens.appendChild(img);
imagens.append(arrow);
mainframe.appendChild(imagens);
mainframe.appendChild(contatos);

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
    description.innerText = "Oi, meu nome é João Nunes, também conhecido como nunesdotpy, sou um recifense graduante em ciência da computação. Adoro desenvolvimento front-end, projetos open-source e descentralizados! Aqui você vai conhecer um pouco mais sobre mim. Atualmente meu foco é em conquistar uma vaga de Dev Junior. Tenho domínio das tecnologias de HTML, CSS, JavaScript, Bootstrap e Git. Meu Inglês é avançado, tenho experiência com NodeJS e frameworks como ReactJS e Angular para desenvolvimento de soluções full-stack. Também tenho conhecimento e já desenvolvi projetos em C, PHP, Java, Python e utilização da metodologia SCRUM.";
    txtPage.style.display = "none";
    arrow.style.display = "none";
    clickhere.style.display = "none";
    imagens.style.display = "block";
    title.style.display = "block";
    description.style.display = "block";
    contatos.style.display = "none";
}

const workPage = () => {
    page = 1;
    opacityReset();
    label.innerText = "Trabalhos";
    img.removeAttribute("id", "img")
    img.setAttribute("class", "works");
    txtPage.style.display = "none";
    arrow.style.display = "block";
    clickhere.style.display = "flex"
    imagens.style.display = "block";
    title.style.display = "block";
    description.style.display = "block";
    contatos.style.display = "none";
    work();
}

const contactPage = () => {
    page = 2;
    opacityReset();
    clickhere.style.display = "none";
    label.innerText = "Contatos";
    imagens.style.display = "none";
    title.style.display = "none";
    description.style.display = "none";
    contatos.style.display = "block";
    contatos.innerHTML = `
        <div class="social">
            <a class="email" href="#" onclick="copiarEmail()">
                <img ed src="../_img/gmail.png"></img>
                <p>${email}</p>
                <p id="copie">Clique para copiar</p>
            </a>
        </div>

        <div class="social">
            <a href="https://twitter.com/nunesdotpy" target="_blank">
                <img src="../_img/twitter.png"></img>
                <p>@nunesdotpy</p>
            </a>
        </div>

        <div class="social">
            <a href="https://www.linkedin.com/in/joao-nunes-1b49791bb/" target="_blank">
                <img id="linkedin" src="../_img/linkedin.png"></img>
                <p>João Nunes</p>
            </a>
        </div>
    
    `
}

const copiarEmail = () => {
    navigator.clipboard.writeText(email);
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