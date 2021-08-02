let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log(`Bem-vinda, ${info.personagem}`);

info['recorrente'] = 'Sim';

for(let key in info){
  console.log(key);
}

for(let key in info){
  console.log(info[key]);
}


console.log(`
${info.personagem} e ${info2.personagem} \n
${info.origem} e ${info2.origem} \n
${info.nota} e ${info2.nota}
`);
if(info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
  console.log('Ambos Recorrentes');
}