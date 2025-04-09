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

const divAno = document.getElementById("ultimo_ano");
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const livros = xmlDoc.getElementsByTagName("livro");
const ultimoLivro = livros[livros.length - 1];

let noAtual = ultimoLivro.lastChild;
while (noAtual && noAtual.nodeType !== 1) {
  noAtual = noAtual.previousSibling;
}

const valorAno = noAtual.firstChild.nodeValue;
const p = document.createElement("p");
p.textContent = `Ano do último livro: ${valorAno}`;
divAno.appendChild(p);
