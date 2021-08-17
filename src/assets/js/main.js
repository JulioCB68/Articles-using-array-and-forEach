const content = document.getElementById("articles")

let articles = [{
    data: "02 de jul, 2021",
    titulo: "Agora é oficial: o Windows 11 está vindo",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis."
  },
  {
    data: "02 de jul, 2021",
    titulo: "Tim Berners-Lee vai leiloar código-fonte da web",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
  },
  {
    data: "02 de jul, 2021",
    titulo: "Tem Firefox novo no pedaço e você vai querer migrar",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
  },
  {
    data: "02 de jul, 2021",
    titulo: "John McAfee, criador do antivírus McAfee, morre",
    texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
  },
]

articles.forEach(articles => {
  const article = `
  <div class="containerCard">
    <div class="header">
      <p>${articles.data}</p>
      <img src="assets/icon/codicon_heart.svg" alt="Heart Icon">
    </div>
    <div class="content">
      <h1>${articles.titulo}</h1>
      <p>${articles.texto}</p>
    </div>
  </div>
  `;

  const div = document.createElement("div");
  div.innerHTML = article;
  content.appendChild(div);
})