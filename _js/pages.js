// definindo const uteis
const label = document.getElementById("pagelabel");
const title = document.getElementById("title");
const description = document.getElementById("title-text");
const img1 = document.getElementById("img1");

// função para mudança das pages
const homePage = () => {
    label.innerText = "Home";
    img1.removeAttribute("hidden","");
    title.removeAttribute("hidden","");
    description.innerText = "Hi, my name is João Nunes, also know as nunesdotpy, I am a brazilian computational science student who loves front-end development, blockchain and decentralized projects.";
}

const workPage = () => {
    label.innerText = "Work";
    img1.setAttribute("hidden","");
    title.setAttribute("hidden","");
    description.innerText = "Here you see some of my projects that a have developed in the past";
}

const contactPage = () => {
    label.innerText = "Contacts";
}