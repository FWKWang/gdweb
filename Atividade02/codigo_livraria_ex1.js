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

const titulosDiv = document.getElementById("titulos");
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const titulos = xmlDoc.getElementsByTagName("titulo");

for (let i = 0; i < titulos.length; i++) {
  const tituloElement = document.createElement("p");
  tituloElement.textContent = titulos[i].textContent;
  titulosDiv.appendChild(tituloElement);
}