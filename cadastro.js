let dataAtual =  ("2021/08/27")

var dataDoEvento =  ("2022/08/27")

if (dataDoEvento > dataAtual) {
    console.log("Permiti Cadastro")   
} else {
    console.log("Cadastro não permitido, invalido")
}

// Se o participante for maior de 18 anos,permitido cadastro; Se não ,aletar que o cadastro não e permitido 

let idade = 19;

if (idade > 18) {
    console.log("Acesso permitido")  
} else {
    console.log("Acesso não permitido, idade negada")
}

// Lista de participantes e palestrantes do evento
// Quantidade de participante

const listaDeParticipantesEPalestrantes = ["Luciano Hulk", "Neymar Junior", "Luccas Carlos", "Carol Sabino", "Guilherme Pinheiro"];


let quantidadeDeParticipantesEPalestrantes = listaDeParticipantesEPalestrantes.length;


if(quantidadeDeParticipantesEPalestrantes < 100) {
    listaDeParticipantesEPalestrantes.push("Alexandre Couto");
    listaDeParticipantesEPalestrantes.push("Mauricio Franco");

    console.log("Inscrição feito com sucesso")
    console.log(listaDeParticipantesEPalestrantes);
} else {
    console.log("cadastro não permitido, limite de cadastro excedido")
} 
