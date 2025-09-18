function idade(nome, ano_atual, ano_nascimento) {
    const idade = ano_atual - ano_nascimento;
    return `${nome} tem ${idade} anos.`;
}
// Exportando a função para ser usada em outros arquivos
module.exports = {
    idade
}