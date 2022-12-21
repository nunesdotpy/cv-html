// criando o obj do pagelabel
const label = document.getElementById("pagelabel");

// função para mudança das pages
const homePage = () => {
    label.innerText = "Home";
}

const workPage = () => {
    label.innerText = "Work";
}

const contactPage = () => {
    label.innerText = "Contacts";
}