const work = () => {
    switch (workShowing) {
        case 0:
            workGxn();
            break;
        case 1:
            workDev();
            break;
        case 2:
            workCv();
            break;
        case 3:
            workDoglife();
            break;
        default:
            workGxn();
            workShowing = 0;
            break;
    }
}

const nextWork = () => {
    workShowing += 1;
    work();
}

const workGxn = () => {
    txtPage.innerText = "Aqui você vai ver um pouco sobre alguns projetos que finalizei ou venho desenvolvendo";
    title.innerText = "GxN Gaming";
    description.innerText = `Site para disponibilizar servidores de jogos feito 100% em HTML, CSS e JavaScript. Função "clica e copia" ao clicar nos IPs para maior praticidade e comodidade ao usuário.`;
    clickhere.innerText = "Clique aqui para visitar";
    clickhere.setAttribute("href", "https://gxn-network.com.br/");
    img.setAttribute("src", "_img/work1.jpeg");
}

const workDev = () => {
    title.innerText = "UniDev";
    description.innerText = `Site para ajudar pessoas iniciantes no mundo de desenvolvimento web. Muito jovens acham o mundo de programação algo distante e inreal para eles, por meio deste projeto tenho como foco dar suporte e solucionar suas dúvidas`;
    clickhere.setAttribute("href", "https://dev.nunesdotpy.com/");
    img.setAttribute("src", "_img/work2.jpeg");
}

const workCv = () => {
    title.innerText = "Currículo Online";
    description.innerText = `Primeira versão utilizada nesse site, tive a ideia de recriar meu CV existente em HTML e CSS para coloca-lo na internet. Hoje conta com responsividade para dispositivos mobiles e tradução de português para inglês.`
    clickhere.setAttribute("href", "cv.html");
    img.setAttribute("src", "_img/work3.jpeg");
}

const workDoglife = () => {
    title.innerText = "Blog DogMind"
    description.innerText = `Blog sobre adestramento canino feito utilizando wordpress.`;
    clickhere.setAttribute("href", "https://doglife.nunesdotpy.com/");
    img.setAttribute("src", "_img/work4.jpeg");
}