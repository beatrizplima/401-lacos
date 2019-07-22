let filmes = [
    {nome: "Rei  Leão", classificacao: 12, estilo: "animacao"},
    {nome: "Vingadores", classificacao: 16, estilo: "acao"},
    {nome: "KillBill", classificacao: 125, estilo: "muito sangue"},
    {nome: "O iluminado", classificacao: 16, estilo: "perturbador"},
    {nome: "Tropa de Elite", classificacao: 18, estilo: "sangue e tapa na cara"},
];

let nomes = prompt("Digite seu nome");
let idade = Number(prompt("Digite sua idade"));

for(let filme of filmes){

if(idade >= filmes.classificacao){
    console.log(`Olá ${nomes}, você pode assistir ${filme.nome}`);
}
}