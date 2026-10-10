alert('Bem vindo ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativas = 1;

// Enquanto chute for diferente do número secreto, o loop continua
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}:`);
    
    if (chute == numeroSecreto) {
        break;
    } else{
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);
