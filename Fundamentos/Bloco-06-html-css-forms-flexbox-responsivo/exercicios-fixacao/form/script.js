const arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];
const selectEstados = document.getElementById('estados-i');
const dataInicio = document.getElementById('data-inicio');

function fillUpStates() {
  
  for (const value of arrayTextoEstado) {
    let option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    selectEstados.appendChild(option);
  }
}

function checkDate() {
  

  if (dataInicio.value.length < 8 || dataInicio.value.length > 10) {
    return 0;
  }
  const dia = parseInt(dataInicio.value.substring(0, 2));
  const mes = parseInt(dataInicio.value.substring(2, 4));
  const ano = parseInt(dataInicio.value.substring(4, 8));

  if (dia < 1 && dia > 31) {
    return -1;
  } else if (mes < 1 && mes > 12) {
    return -2;
  } else if (ano < 1940 || ano < 0) {
    return -3;
  }
/* Retorna 0 caso o tamanho seja invalido 
  Retorna -1 caso o dia seja invalido
  Retorna -2 caso o mes seja invalido
  Retorna -3 caso o ano seja invalido 
*/
console.log(dia, mes, ano);

  
}


selectEstados.addEventListener('click', fillUpStates);