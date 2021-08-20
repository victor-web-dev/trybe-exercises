const arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

const selectEstados = document.getElementById('estados-i');


function fillUpStates() {
  
  for (const value of arrayTextoEstado) {
    let option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    selectEstados.appendChild(option);
  }
}


selectEstados.addEventListener('click', fillUpStates);