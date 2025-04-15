const xmlString = `
<biblioteca>
  <livro categoria="ficcao">
    <titulo>O Guia do Mochileiro das Galáxias</titulo>
    <autor>Douglas Adams</autor>
  </livro>
  <livro categoria="tecnico">
    <titulo>Introdução ao XML</titulo>
    <autor>Professor Exemplo</autor>
  </livro>
</biblioteca>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

const raiz = xmlDoc.documentElement;
console.log("No raiz:", raiz.nodeName);
const filhos = raiz.childNodes;

for (let i = 0; i < filhos.length; i++) {
  const filho = filhos[i];
  
  if (filho.nodeType === 1) {
    console.log("Elemento filho:", filho.nodeName);
  }
}
