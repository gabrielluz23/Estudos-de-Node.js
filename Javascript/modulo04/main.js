var button = document.querySelector('.pesquisarUser');
var input = document.querySelector('.usuario');
var lista = document.querySelector('.lista');
button.onclick = function () {
  axios.get('https://api.github.com/users/'+input.value+'/repos')
  .then(function(response){
    lista.innerHTML = '';
    usuarios = response.data;
    for ( usuario of usuarios){
      var userElement = document.createElement('li');
      var userText = document.createTextNode(JSON.stringify(usuario.full_name));
      userElement.appendChild(userText);
      lista.appendChild(userElement);
    }
  })
  .catch(function(error){
    alert('Usuario não Existe');
  })
   
}


 function checaIdade(idade) {
  return new Promise(function(resolve,reject) {
   if(idade >18) {
     resolve(idade);
   } else {
     reject(idade);
   }
  },2000)
}
//  checaIdade(10)
//  .then(function(response){
//    console.log('ele e maior de 18 anos')
//  })
//  .catch(function(error) {
//    console.log('ele e e menor de 18 anos')
//  })