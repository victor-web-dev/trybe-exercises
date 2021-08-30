
const addKeyObj = (object, key, value) => {
  object[key] = value;
  return object;
}

let obj = {
  name: 'victor',
  age: '26',
}

console.log(addKeyObj(obj, 'lastName', 'araujo'));