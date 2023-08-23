// definando const uteis
const container = document.querySelector(".container");
const containerchild = document.querySelector(".container-child");
const projectPage = document.querySelector(".project");

// criando a HOME
const homePage = () => {
  containerchild.innerHTML = `
  <h1>nunes.sh</h1>
  <div class="github-photo">
    <img src="_img/github-photo.jpeg" alt="nunesdotpy photo" />
  </div>
  <div class="resume">
    <p id="about-me">
      me chamo João Nunes, sou um desenvolvedor web de Recife - PE e estou a
      procura de novos desafios. Venho aqui mostrar um pouco das minhas
      experiências e conhecimento :)
    </p>
  </div>
  <div class="stack">
    <p>Tech Stack:</p>
    <img title="HTML5" src="_img/html5.png" alt="HTML5 Logo" />
    <img title="CSS3" src="_img/css3.png" alt="CSS3 Logo" />
    <img title="JavaScript" src="_img/js.jpeg" alt="JavaScript Logo" />
    <img title="ReactJS" src="_img/reactjs.png" alt="ReactJS Logo" />
    <img title="Angular" src="_img/angular.png" alt="Angular Logo" />
  </div>

  <div class="btn-artigos">
    <a href="https://blog.nunesdotpy.com" target="_blank">
      <p>
          Veja meus artigos
      </p>
  </a>
  </div>
    `;
  pagesOp(0);
};

// page Work
const workPage = () => {
  containerchild.innerHTML = `
  <div class="works">
  <div class="container-works">
      <a href="#" onclick="canilSaoSeverinoPage()">
        <div class="project">
          <div class="work-preview">
            <img src="_img/canilsaoseverino.jpeg" alt="Canil São Severino" />
          </div>
          <h2>Canil São Severino</h2>
          <p>Ver mais</p>
        </div>
      </a>
    <a href="#" onclick="canilRecantoDachshund()">
        <div class="project">
          <div class="work-preview">
            <img src="_img/recantodachshund.jpeg" alt="Recanto de Aldeia Dachshund" />
          </div>
          <h2>Recanto de Aldeia Dachshund</h2>
          <p>Ver mais</p>
        </div>
      </a>
    </div>
  <div class="container-works">
    <a href="#" onclick="gxnWorkPage()">
      <div class="project">
        <div class="work-preview">
          <img src="_img/work1.jpeg" alt="GxN Network" />
        </div>
        <h2>GxN Network</h2>
        <p>Ver mais</p>
      </div>
    </a>
    <a href="#" onclick="bankingAppPage()">
      <div class="project">
        <div class="work-preview">
          <img src="_img/work2.jpeg" alt="Banking App" />
        </div>
        <h2>Banking App</h2>
        <p>Ver mais</p>
      </div>
    </a>
  </div>
  <div class="container-works">
    <a href="#" onclick="unidevPage()">
      <div class="project">
        <div class="work-preview">
          <img src="_img/work3.jpeg" alt="UniDev" />
        </div>
        <h2>UniDev</h2>
        <p>Ver mais</p>
      </div>
    </a>
    <a href="#" onclick="cvPage()">
      <div class="project">
        <div class="work-preview">
          <img src="_img/work4.jpeg" alt="Curriculo Online" />
        </div>
        <h2>Curriculo Online</h2>
        <p>Ver mais</p>
      </div>
    </a>
  </div>
</div>
    `;
  pagesOp(1);
};

const contactPage = () => {
  containerchild.innerHTML = `
        <div class="contact">
          <div>
            <a href="#" onclick="copiarEmail()" style="text-decoration: none;">
              <svg class="contact-preview"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-envelope-at"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"
                />
                <path
                  d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
                />
              </svg>
              <p>contato@nunesdotpy.com</p>
              <p>Clique sobre para copiar</p>
            </a>
          </div>
        </div>
        <div class="contact">
          <div>
            <a href="https://twitter.com/nunesdotpy" target="_blank">
              <svg class="contact-preview"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
              <p>@nunesdotpy</p>
            </a>
          </div>
        </div>
        <div class="contact">
          <div>
            <a
              href="https://www.linkedin.com/in/joao-nunes-1b49791bb/"
              target="_blank"
            >
              <svg class="contact-preview"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                />
              </svg>
              <p>João Nunes</p>
            </a>
          </div>
        </div>
    `;
  pagesOp(2);
};

const copiarEmail = () => {
  navigator.clipboard.writeText("contato@nunesdotpy.com");
  alert("E-Mail copiado!");
};

homePage();
pagesOp(0)