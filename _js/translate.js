
const brflag = document.getElementById("br-flag");
const usflag = document.getElementById("us-flag");

// Reloada a página
const ptLang = () => {
    window.location.reload();
}

// Função para encurtar as linhas de texto e otimizar a tradução
const upTxt = (id,texto) => {
    document.getElementById(id).innerHTML = `${texto}`;
}

// Traduz os textos para inglês
const engLang = () => {
    upTxt("description","Brazilian | Single | 20 years old");
    upTxt("goals","Goals");
    upTxt("goals-text","Develop activities that contribute to my professional development, improve and expand my knowledge in front-end development and explore new technologies.");
    upTxt("profile","Profile");
    upTxt("profile-text","Interest and ease in learning, determined and committed.");
    upTxt("skills","Skills");
    upTxt("skills-text","HTML, CSS, JavaScript, Bootstrap, Git, Angular, ReactJS, NodeJS, WordPress, PHP, MySQL, MongoDB, Python and Java. Experience in Linux and Google Cloud.");
    upTxt("grad","Graduation");
    upTxt("grad-text","4th period Computer Science - Faculdade Estácio de Sá - Night");
    upTxt("pro","Professional Experience");
    upTxt("pro-1","Escola Irmã Dulce - 21/02/2022 a 21/08/2022 - IT internship");
    upTxt("pro-2","Ministério Público de Pernambuco – 20/05/2019 a 12/12/2019 - Administrative assistant internship");
    upTxt("languages","Languages");
    upTxt("languages-1","Portuguese - Native");
    upTxt("languages-2","English – Intermediary EF SET: B2");
    upText("languages-3","Spanish - Basic");
}

