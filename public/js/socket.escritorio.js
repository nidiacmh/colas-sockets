//Comando para establecer la conexion
var socket = io();
//Para ver los parametros que vienen en el url/no lo soporta en interner explore
var searchParams = new URLSearchParams(window.location.search);
//console.log(searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
  window.location = 'index.html';
  throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');

var label = $('small');
console.log(escritorio);

$('h1').text('Escritorio' + escritorio);

$('button').on('click', function(){
  socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
    //console.log(resp);
    if (resp === 'No hay tickets') {
      alert(resp);
      return;

    }
    label.text('Ticket ' + resp.numero);
  });
});
