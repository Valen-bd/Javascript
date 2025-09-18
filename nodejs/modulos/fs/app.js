//const fs = require('fs') ;
import fs from 'fs' ;

fs.readFile('example.txt','utf8', (erro, conteudo_d0_arquivo ) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', err0);
        return;
    }
    console.log('Conteúdo do arquivo:', conteudo_d0_arquivo);
  });

  
console.log('Esta mensagem aparece primeiro.');