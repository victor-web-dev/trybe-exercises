const showStudentSkills = (object) => {
  const objectData = Object.keys(object);

  for (const key in objectData) {
    console.log(`Habilidade: ${objectData[key]}, Nivel: ${object[objectData[key]]}`);
  }

}

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

console.log(showStudentSkills(student1));