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
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const titulos = xmlDoc.getElementsByTagName("titulo");
const segundoTitulo = titulos[1].firstChild.nodeValue;

console.log("Título do segundo livro:", segundoTitulo);
