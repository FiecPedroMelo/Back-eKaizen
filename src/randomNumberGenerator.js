//variavel que é usada como uma semente para a geração de números aleatorios
let _seed;
//viriavel boolean inicializada como verdadeiro
let validator = true;
//objeto vazio usado para armazenar o resultado da validação
let payload = {};
//array de strings que contem números
let numbers = [
  "0.3156106622882362",
  "0.5513213466665547",
  "0.3301843000590452",
  "0.04769233684601204",
  "0.4450511749319048",
  "0.8014283726497524",
  "0.6599671903586568",
  "0.39207733233979525",
  "0.9243979984480575"
];

//recebe uma seed (-seed(192837465)-) como argumento e atribui á variavel 
export function seed(seed) {
  _seed = seed;
}

//função que gera um número aleatório com a variavel _seed com um algoritmo 
export function random() {
  const x = Math.sin(_seed++) * 10000;
  return x - Math.floor(x);
}
//recebe um array como argumento e verifica se cada elemento do array está presente em "numbers"
export function checkRandomNumber(array) {
  //itera sobre cada elemento do array fornecido como argumento
  array.forEach((element) => {
    //verifica se o elemento atual convertido para string está presente no array "numbers"
    if (!numbers.includes(element.toString())) {
      //se o elemento não está presente, define a variável "validator" como false
      validator = false;
    }
  });

  //verifica o valor da variável "validator"
  validator
    //se "validator" é verdadeiro, configura o objeto "payload" com status "success"
    ? (payload = JSON.parse('{ "status": "success"}'))
    //se "validator" é falso, configura o objeto "payload" com status "error"
    : (payload = JSON.parse('{ "status": "error"}'));

  //retorna o objeto "payload" após a verificação
  return payload;
}
