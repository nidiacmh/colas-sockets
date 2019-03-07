//Comando para establecer la conexión
var socket = io();
//asignar una referencia directa al label del html
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
  console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(resp){
  console.log(resp);
  label.text(resp.actual);
});

$('button').on('click', function(){
  //console.log('click');
  socket.emit('siguienteTicket', null, function(siguienteTicket){
      label.text(siguienteTicket);
  });
});
