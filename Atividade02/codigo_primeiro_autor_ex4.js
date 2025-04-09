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

const divAutor = document.getElementById("primeiro_autor");
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const primeiroLivro = xmlDoc.getElementsByTagName("livro")[0];

let noAtual = primeiroLivro.firstChild;
while (noAtual && noAtual.nodeType !== 1) {
  noAtual = noAtual.nextSibling;
}

let autorNode = noAtual.nextSibling;
while (autorNode && autorNode.nodeType !== 1) {
  autorNode = autorNode.nextSibling;
}

const nomeAutor = autorNode.firstChild.nodeValue;
const p = document.createElement("p");
p.textContent = `Primeiro autor: ${nomeAutor}`;
divAutor.appendChild(p);
