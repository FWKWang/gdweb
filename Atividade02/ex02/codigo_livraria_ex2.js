const xmlString = `
  <livraria>
    <livro id="1">
      <titulo>O Pequeno Principe</titulo>
      <autor>Antoine de Saint-Exupery</autor>
      <ano>1943</ano>
    </livro>
    <livro id="2">
      <titulo>Dom Quixote</titulo>
      <autor>Miguel de Cervantes</autor>
      <ano>1605</ano>
    </livro>
    <livro id="3">
      <titulo>1984</titulo>
      <autor>George Orwell</autor>
      <ano>1949</ano>
    </livro>
  </livraria>
`;

const autoresAnosDiv = document.getElementById("autores_anos");
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const livros = xmlDoc.getElementsByTagName("livro");

for (let i = 0; i < livros.length; i++) {
  const autor = livros[i].getElementsByTagName("autor")[0].textContent;
  const ano = livros[i].getElementsByTagName("ano")[0].textContent;

  const autorElement = document.createElement("p");
  autorElement.textContent = `Autor: ${autor}`;

  const anoElement = document.createElement("p");
  anoElement.textContent = `Ano: ${ano}`;

  const espaco = document.createElement("br");

  autoresAnosDiv.appendChild(autorElement);
  autoresAnosDiv.appendChild(anoElement);
  autoresAnosDiv.appendChild(espaco);
}
