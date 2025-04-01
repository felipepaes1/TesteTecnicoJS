Questão 1: Desafio de Algoritmo - Soma de Subarray

Descrição: Implemente a função findSubarraySum que recebe um array de números inteiros (positivos e negativos)  e retorna a soma dos valores em determinado intervalo de índice contínuo do array fornecido, os índices do novo subarray deverão ser passados como parâmetros dentro do arquivo teste e determinarão qual o intervalo entre items a serem somados.

Exemplo com parâmetros do índice 2 ao 6:

Entrada:
const nums = [-2, -3, 4, -1, -2, 1, 5, -3];

Saída Esperada:
7 // Explicação: O subarray contínuo do indície de 2 a 6 é [4, -1, -2, 1, 5] = 7.

Questão 2: Filtragem e Transformação de Dados

Descrição: Implemente duas funções que, dada uma lista de números, retorne um objeto contendo a contagem de números que são positivos e a soma dos números negativos.

Exemplo:

Entrada:
const numbers = [1, -2, 3, -4, 5, -6];

Saída: 
{
  countPositives: 3,
  sumNegatives: -12
}

Questão 3: Verificação de Anagramas

Descrição: Desenvolva uma função que determine se duas strings são anagramas uma da outra. Uma string é um anagrama de outra se as duas strings podem ser rearranjadas para formar a outra. A comparação deve ignorar espaços e não ser sensível a maiúsculas ou minúsculas.

Exemplo:

Entrada:
const str1 = "Listen";
const str2 = "Silent";

Saída esperada:
true