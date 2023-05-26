
let numberRandom = document.getElementById('numberRandom');
let numbertarget = document.getElementById('numbertarget');


numberRandom.addEventListener('click', function() {
  
  let number = Math.floor(Math.random() * 50) + 1;
  
  
  numbertarget.textContent = "Número Gerado: " + number;
});

console.log("numbertarget");