const nextWork = () => {
    workShowing += 1;
    switch(workShowing){
    case 1:
        workDev();
        break;
    case 2:
        workCv();
        break;
    case 3:
        workPage();
        workShowing = 0;
        break;
    }
}

const workDev = () => {
    title.innerText = "UniDev";
    description.innerText = `Site para ajudar pessoas iniciantes no mundo de desenvolvimento web. Muito jovens acham o mundo de programação algo distante e inreal para eles, por meio deste projeto tenho como foco dar suporte e solucionar suas dúvidas`;
    clickhere.setAttribute("href", "https://dev.nunesdotpy.com");
    img.setAttribute("src", "_img/work2.jpeg");
}

const workCv = () => {
    title.innerText = "Currículo Online";
    description.innerText = `Primeira versão utilizada nesse site, tive a ideia de recriar meu CV existente em HTML e CSS para coloca-lo na internet. Hoje conta com responsividade para dispositivos mobiles e tradução de português para inglês.`
    clickhere.setAttribute("href", "cv.html");
    img.setAttribute("src", "_img/work3.jpeg");
}