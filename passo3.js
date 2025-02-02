// script.js

// Função que gera o número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

const input = document.getElementById('guess');
const button = document.getElementById('submitGuess');
const hint = document.getElementById('hint');
const attemptsDisplay = document.getElementById('attempts');
const celebration = document.getElementById('celebration');

// Função para verificar o palpite do jogador
function verificarPalpite() {
    const palpite = parseInt(input.value);
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, digite um número entre 1 e 100.");
        return;
    }

    tentativas++;
    attemptsDisplay.textContent = `Tentativas: ${tentativas}`;
    
    if (palpite < numeroSecreto) {
        hint.textContent = "O número secreto é maior!";
    } else if (palpite > numeroSecreto) {
        hint.textContent = "O número secreto é menor!";
    } else {
        hint.textContent = "";
        celebration.style.display = 'block';
        celebration.innerHTML = `Você acertou! 🎉 O número era ${numeroSecreto}.`;
        button.disabled = true; // Desabilitar o botão após acertar
    }

    input.value = ''; // Limpar o campo de entrada
}

// Adicionar evento ao botão para verificar o palpite
button.addEventListener('click', verificarPalpite);
