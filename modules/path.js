const path = require("path");

// base name
console.log(path.basename(__filename));

// diretorio atual
console.log(path.dirname(__filename));

// extenção do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

//adicionar caminos
console.log(path.join(__dirname, "teste", "teste.html"))