// Variáveis
let vitorias = 65;
let derrotas = 20;

// Operadores (cálculo do saldo de vitórias)
let saldoVitorias = vitorias - derrotas;

// Estrutura de decisão
let nivel;

if (vitorias < 10) {
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

// Função para calcular o nível
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Laços de Repetição - for
function calcularNiveisDeJogadores(jogadores) {
    for (let jogador of jogadores) {
        const resultado = calcularNivel(jogador.vitorias, jogador.derrotas);
        console.log(resultado);
    }
}

// Exemplo de uso das funções com uma lista de jogadores
//const jogadores = [
    { vitorias: 65, derrotas: 20 },
    { vitorias: 5, derrotas: 15 },
    { vitorias: 110, derrotas: 10 },
    // Adicione mais jogadores conforme necessário
//];

calcularNiveisDeJogadores(jogadores);
