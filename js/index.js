const Navbar = (pagina) => {
    document.getElementById('home').style.color = "#848588";
    document.getElementById('work').style.color = "#848588";
    document.getElementById('contact').style.color = "#848588";


    switch (pagina) {
        case 'home':
            document.getElementById('home').style.color = "white";
            break;
        case 'work':
            document.getElementById('work').style.color = "white";
            break;
        case 'contact':
            document.getElementById('contact').style.color = "white";
            break;
    }
}

Navbar('home')