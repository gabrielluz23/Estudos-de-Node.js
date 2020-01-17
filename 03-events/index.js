const EventEmiter = require('events');


class MeuEmissor extends EventEmiter {

}
// const meuEmissor = new MeuEmissor()
// const nomeEvento = 'usuario:click'

// meuEmissor.on(nomeEvento,function(click){
//   console.log('um usuario clickou',click)
// })
// meuEmissor.emit(nomeEvento,' no ok');
// count =0;
// setInterval(() => {
//   meuEmissor.emit(nomeEvento,' no ok' + count++);
// }, 1000);

const stdin = process.openStdin();
stdin.addListener('data',function(value){
  console.log(`voce Digitou: ${value.toString().trim()}`)
})