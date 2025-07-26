let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;

if (operacao === 1) {
  // Adiciona ao estoque
  estoque += quantidade;
  print(estoque);
} else if (operacao === 2) {
  // Retira do estoque, se houver quantidade suficiente
  if (quantidade > estoque) {
    print("Estoque insuficiente");
  } else {
    estoque -= quantidade;
    print(estoque);
  }
}