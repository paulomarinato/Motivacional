
const arrayItens = [];

for (let i = 1; i <= 50; i++) {
  arrayItens.push(i);
}

function sortearItem() {
  
  const indiceSorteado = Math.floor(Math.random() * arrayItens.length);  
  const itemSorteado = arrayItens[indiceSorteado];  
    console.log("Item sorteado:", itemSorteado);
}

document.getElementById("button_motivacional").addEventListener("click", sortearItem);
document.getElementById("button_autoajuda").addEventListener("click", sortearItem);
document.getElementById("button_biblia").addEventListener("click", sortearItem);
document.getElementById("button_humor").addEventListener("click", sortearItem);
