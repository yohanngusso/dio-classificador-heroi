# Classificador de Nível de Herói

Desafio da [DIO](https://www.dio.me/) - Formação Lógica de Programação  
Exercício prático para aplicação de conceitos fundamentais de lógica e estruturas de controle.

## Descrição

Sistema de classificação de heróis baseado em pontos de experiência (XP). O programa recebe nome e XP de um ou mais heróis e retorna o nível correspondente.

## Requisitos Técnicos

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão

## Tabela de Classificação

| XP                  | Nível       |
|---------------------|-------------|
| Menor que 1.000     | Ferro       |
| 1.001 - 2.000       | Bronze      |
| 2.001 - 5.000       | Prata       |
| 5.001 - 7.000       | Ouro        |
| 7.001 - 8.000       | Platina     |
| 8.001 - 9.000       | Ascendente  |
| 9.001 - 10.000      | Imortal     |
| 10.001 ou mais      | Radiante    |

## Implementação

### Estrutura

```javascript
function classificarNivel(xp) {
  // Lógica de classificação
}

const herois = [
  { nome: "NomeHeroi", xp: valorXP }
];

for (const heroi of herois) {
  const nivel = classificarNivel(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
