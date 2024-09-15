// Exercício 1

// function isOneEdit(strA: string, strB: string): boolean {
//   // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
//   if (Math.abs(strB.length - strA.length) > 1) return false;

//   // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
//   if (strA.length > strB.length) return strA.includes(strB);
//   if (strB.length > strA.length) return strB.includes(strA);

//   // Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
//   // Nesse caso, varremos as strings contando quantas letras diferentes tem
//   let charsDiffCount = 0;
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < strA.length; i++) {
//     // eslint-disable-next-line no-plusplus
//     if (strA[i] !== strB[i]) charsDiffCount++;
//   }

//   // Retorna true se a diferença é 1, false caso contrário
//   return charsDiffCount === 1;
// }

// console.log(isOneEdit('bananak', 'banana')); // true

// Exercício 2

const stringCompression = (input: any) => {
  const substrings = [];
  let lastChar = input[0];
  let charCount = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    // eslint-disable-next-line no-plusplus
    charCount++;
  }

  substrings.push(lastChar + charCount);
  let result = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const key of substrings) {
    result += key;
  }

  return result.length > input.length ? input : result;
};

console.log(stringCompression('aabcccccaaa')); // a2b1c5a3
