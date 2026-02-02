function classificarNivel(xp) {
  if (xp < 1000) return "Ferro";
  else if (xp <= 2000) return "Bronze";
  else if (xp <= 5000) return "Prata";
  else if (xp <= 7000) return "Ouro";
  else if (xp <= 8000) return "Platina";
  else if (xp <= 9000) return "Ascendente";
  else if (xp <= 10000) return "Imortal";
  else{
    return "Radiante";
  }
}

const herois = [
  { nome: "Arthas", xp: 7500 },
  { nome: "Jaina", xp: 950 },
  { nome: "Thrall", xp: 12000 },
  { nome: "Sylvanas", xp: 3500 }
];

for (const heroi of herois) {
  const nivel = classificarNivel(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}