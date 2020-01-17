// 0 obter um usuario
//  1 obter o nume pelo ID
// 2 obter o endereço do usuario pelo id 

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);


function obterUsuario() {

  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {

      return resolve({
        id: 1,
        nome: 'aladin',
        dataNascimento: new Date()
      })
    }, 1000
    )
  })

}

function obterTelefone(idUser) {

  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve(
        {
          telefone: '40028922',
          ddd: 11
        })
    }, 2000
    )
  })

}
function obterEndereco(idUser,callback) {
  
    setTimeout(() => {
      return callback(null,
        {
          rua: ' rua dos bobos',
          numero: 0,
          cep: '666666'
        })
    })
  

}
main()
 async function main() {

    try{
      console.time('media-promise')
      const usuario = await obterUsuario();
      // const telefone = await obterTelefone(usuario.id);
      // const endereco = await obterEnderecoAsync(usuario.id);
      const resultado = await Promise.all([
        obterTelefone(usuario.id),
        obterEnderecoAsync(usuario.id)
      ]);
      const endereco = resultado[1];
      const telefone = resultado[0];
      console.log(`
      nome: ${usuario.nome},
      endereco: ${endereco.rua},numero: ${endereco.numero} cep: ${endereco.cep},
      telefone: (${telefone.ddd})${telefone.telefone}
      `)
      console.timeEnd('media-promise');
    }
    catch(error){
      console.log(error);
    }
}

// const usuarioPromise = obterUsuario()
// usuarioPromise
 
//   .then(function (usuario) {
//     return obterTelefone(usuario.id)
//       .then(function resolverTelefone(result) {
//         return {
//           usuario: {
//             id: usuario.id,
//             nome: usuario.nome
//           },
//           telefone: result
//         }

//       })
//   })
//   .then (function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id)
//    return endereco.then(function resolverEndereco(result){
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//       }
//     })
//   })
//   .then(function (result) {
//     console.log(`
//         nome: ${result.usuario.nome},
//         endereco: ${result.endereco.rua}, ,${result.endereco.numero} cep: ${result.endereco.cep},
//         telefone: (${result.telefone.ddd})${result.telefone.telefone}
//        ` )
//   })
//   .catch(function (error) {

//     console.log('error ', error);
//   })


// obterUsuario(function resolverUsuario(error, usuario) {
//   if (error) {
//     console.error('Deu Ruim em Usuario', error)
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//     if (error1) {
//       console.error('Deu Ruim em Telefone', error1)
//       return;
//     }

//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//       if (error2) {
//         console.error('Deu Ruim em Endereco', error2)
//         return;
//       }
//       console.log(`
//     nome: ${usuario.nome},
//     endereco: ${endereco.rua}, ,${endereco.numero} cep: ${endereco.cep},
//     telefone: (${telefone.ddd})${telefone.telefone}
//    ` )
//     })
//   })
// });
