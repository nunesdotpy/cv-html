const homeSvg = document.getElementById("home");
const workSvp = document.getElementById("work");
const contactSvp = document.getElementById("contact");
homeSvg.style.opacity = 1;


const pagesOp = (page) => {
    switch (page) {
        case 0:
            homeSvg.style.opacity = 1;
            workSvp.style.opacity = 0.5;
            contactSvp.style.opacity = 0.5;
            break;
        case 1:
            homeSvg.style.opacity = 0.5;
            workSvp.style.opacity = 1;
            contactSvp.style.opacity = 0.5;
            break;
        case 2:
            homeSvg.style.opacity = 0.5;
            workSvp.style.opacity = 0.5;
            contactSvp.style.opacity = 1;
            break;
    }
}