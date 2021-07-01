```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  
  media = (ex + p1 + p2) / 3
  
  if (media >= 9) {
    return "A"
  } else if (media < 9 && media >= 7.5 ){
    return "B"
  } else if (media < 7.5 && media >= 6) {
    return "C"
  } else {
    return "D"
  }
  
}
