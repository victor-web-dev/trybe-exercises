let estado = 'aprovada';

switch(estado){
  case 'aprovada':
    console.log('esta aprovado');
    break;
  
  case 'lista':
    console.log('esta na lista');
    break;
  
  case 'reprovada':
    console.log("esta reprovado");
    break;
  
  default:
    console.log("algo de errado nao esta certo");
    break;
}