const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/1', (res) => {
  let data = '';
  
  //Um pedaço foi recebido.
    res.on('data', (chunk) => {
        data  += chunk;
    });

  //A resposta inteira foi recebida. Imprime o resultado.
    res.on('end', () => {
        console.log(data);
    }); 

}).on('error', (err) => {
    console.log('Erro: ' + err.message);
});