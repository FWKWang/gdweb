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

const divIds = document.getElementById("ids");
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const livros = xmlDoc.getElementsByTagName("livro");

for (let i = 0; i < livros.length; i++) {
  const atributoId = livros[i].getAttributeNode("id");
  const valorId = atributoId.nodeValue;

  const p = document.createElement("p");
  p.textContent = `ID do livro: ${valorId}`;
  divIds.appendChild(p);
}
