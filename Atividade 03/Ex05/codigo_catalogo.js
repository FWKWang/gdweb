const xmlString = `
<catalogo>
  <produto id="A45">
    <nome>Caneta Azul</nome>
    <preco>2.50</preco>
    <estoque>150</estoque>
  </produto>
</catalogo>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

const produto = xmlDoc.querySelector('produto[id="A45"]');
produto.setAttribute("moeda", "BRL");
console.log("Atributo 'moeda' adicionado:", produto.getAttribute("moeda"));
