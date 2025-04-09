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

const divNavegacao = document.getElementById("navegacao");
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");
const autorSegundoLivro = xmlDoc.getElementsByTagName("autor")[1];
const livroPai = autorSegundoLivro.parentNode;

let noAtual = livroPai.firstChild;
while (noAtual && noAtual.nodeType !== 1) {
  noAtual = noAtual.nextSibling;
}

const titulo = noAtual.firstChild.nodeValue;
const p = document.createElement("p");
p.textContent = `Titulo do segundo livro: ${titulo}`;
divNavegacao.appendChild(p);
