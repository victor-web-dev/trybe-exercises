const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addValueObj = (obj, key, value) => { obj[key] = value };
// 2
const listObjKeys = (obj) => { console.log(Object.keys(obj)) };
// 3
const objLength = (obj) => { console.log(Object.keys(obj).length) };
// 4
const objValues = (obj) => { console.log(Object.values(obj).toString()) }
// 5 
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// 6
const totalStudents = (obj) => {
  let total = 0;
  for (const key in obj) {
    total += obj[key].numeroEstudantes;
  }
  return total;
}
// 7
const getValueByIndex = (obj, index) => {
  if (index >= Object.keys(obj).length || index < 0) {
    return -1;
  } else {
    return Object.keys(obj)[index];
  }
}
// 8
const verifyPair = (obj, key, value) => {
  const data = Object.entries(obj);
  for (const i in data) {
    if (data[i][0] === key) {
      return data[i][1] === value;
    }
  }
  return false;
};

