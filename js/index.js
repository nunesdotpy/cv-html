const Navbar = (pagina) => {
  document.getElementById("home").style.color = "#848588";
  document.querySelector(".home").hidden = true;
  document.getElementById("work").style.color = "#848588";
  document.querySelector(".work").hidden = true;
  document.getElementById("contact").style.color = "#848588";
  document.querySelector(".contact").hidden = true;

  switch (pagina) {
    case "home":
      document.getElementById("home").style.color = "white";
      document.querySelector(".home").hidden = false;
      break;
    case "work":
      document.getElementById("work").style.color = "white";
      document.querySelector(".work").hidden = false;
      break;
    case "contact":
      document.getElementById("contact").style.color = "white";
      document.querySelector(".contact").hidden = false;
      break;
  }
};

const verMais = (projeto) => {
  document.getElementById(projeto).style.display = "block";
  document.getElementById(`work_${projeto}`).style.height = "460px";
  document.getElementById(`verMais_${projeto}`).style.display = "none";
};

Navbar("work");
