//JavaScript Document
$(document).ready(function(e){
	var citas =[];
	$('#enviar').on('click', function())
	   //mostrar el gift
	$.when($.post("http://192.168.4.46/regeneracion/buscarcitas.php",{usuario: $('#usuario').val(), password: $('#pass').val()})).then(
		function exito (datos) {
            alert (datos);
		},
		function error(){
			alert ("error no de puede alcanzar el servidor");
		}
		); //then when
});// click enviar 
