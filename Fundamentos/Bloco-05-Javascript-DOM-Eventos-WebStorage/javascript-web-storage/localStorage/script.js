console.log(localStorage.length);

localStorage.setItem("firstname", "Adam");

localStorage.setItem("lastname", "Smith");

console.log(localStorage.getItem("lastname"));

console.log(localStorage.length);

localStorage.removeItem("lastname");

localStorage.clear();