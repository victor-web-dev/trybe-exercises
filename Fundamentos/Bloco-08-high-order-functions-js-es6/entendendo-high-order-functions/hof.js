/* 
  High order functions - 
  Basically high order functions are functions that takes other functions as parameters
  or return a function.
  
  High order functions - 
  Basicamente sao funcoes que recebem outra funcao como parametro ou retornam uma funcao.
*/

const wakeUp = () =>  'Acordando!!' ;
const breakfast = () => 'Bora tomar café!!';
const sleepTime = () => 'Partiu dormir';

const doingThings = (action) => { console.log(action()) };

doingThings(breakfast);