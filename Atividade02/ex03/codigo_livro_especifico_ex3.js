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

const livroDiv = document.getElementById("livro_especifico");
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const primeiroLivro = xmlDoc.getElementsByTagName("livro")[0];
const id = primeiroLivro.getAttribute("id");
const titulo = primeiroLivro.getElementsByTagName("titulo")[0].textContent;
const autor = primeiroLivro.getElementsByTagName("autor")[0].textContent;
const ano = primeiroLivro.getElementsByTagName("ano")[0].textContent;

const p1 = document.createElement("p");
p1.textContent = `ID: ${id}`;

const p2 = document.createElement("p");
p2.textContent = `Titulo: ${titulo}`;

const p3 = document.createElement("p");
p3.textContent = `Autor: ${autor}`;

const p4 = document.createElement("p");
p4.textContent = `Ano: ${ano}`;

livroDiv.appendChild(p1);
livroDiv.appendChild(p2);
livroDiv.appendChild(p3);
livroDiv.appendChild(p4);
