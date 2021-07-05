```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  //Escreva seu código aqui
  let vezes = 0
  
  for(let index of arrayDeNumeros){
    if( index === numeroEscolhido){
      vezes++
    }
  }
    
  if (vezes === 0){
    return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${vezes}x`
  }
}