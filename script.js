let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = Number(document.getElementById("palpite").value);
  tentativas++;

  if (palpite === numeroSecreto) {
    document.getElementById("mensagem").textContent = 
      `🎉 Parabéns! Você acertou o número ${numeroSecreto}!`;
    document.getElementById("tentativas").textContent = 
      `Tentativas: ${tentativas}`;
  } else if (palpite < numeroSecreto) {
    document.getElementById("mensagem").textContent = "🔼 O número é maior!";
  } else {
    document.getElementById("mensagem").textContent = "🔽 O número é menor!";
  }
}
