// Definição das flags
const brflag = document.getElementById("br-flag");
const usflag = document.getElementById("us-flag");


// Função para encurtar as linhas de texto e otimizar a tradução
const upTxt = (id,texto) => {
    document.getElementById(id).innerHTML = `${texto}`;
}

// Reloada a página
const ptLang = () => {
    upTxt("description","Brasileiro | Solteiro | 20 anos");
    upTxt("goals","Objetivo");
    upTxt("goals-text","Desenvolver atividades que tenha por finalidade contribuir para o meu desenvolvimento profissional e pessoal, aperfeiçoar e expandir meu conhecimento em desenvolvimento front-end e explorar novas tecnologias");
    upTxt("profile","Perfil");
    upTxt("profile-text","Interesse e facilidade em aprender, determinado e comprometido.");
    upTxt("skills","Habilidades");
    upTxt("skills-text","Conhecimento em HTML, CSS, JavaScript, Bootstrap, Git, Angular, ReactJS, NodeJS, WordPress, PHP, MySQL, MongoDB, Python e Java. Experiência em ambiente Linux e em Google Cloud.");
    upTxt("grad","Formação");
    upTxt("grad-text","4° período de ciência da computação na Faculdade Estácio de Sá – Turno: Noite");
    upTxt("pro","Experiência profissional");
    upTxt("pro-1","Escola Irmã Dulce - 21/02/2022 a 21/08/2022 - Estagiário de TI");
    upTxt("pro-2","Ministério Público de Pernambuco – 20/05/2019 a 12/12/2019 - Estagiário de Auxiliar Administrativo");
    upTxt("languages","Idiomas");
    upText("languages-1","Português - Nativo");
    upText("languages-2","Inglês – Intermediário EF SET: B2");
    upTxt("languages-3","Espanhol - Básico");
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

