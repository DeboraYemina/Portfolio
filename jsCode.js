function alerta() {
    const _nombre = document.getElementById('nombre');
    const _email = document.getElementById('email');
    const _asunto = document.getElementById('asunto');
    const _mensaje = document.getElementById('mensaje');

    if (_nombre.value === "") {
        alert("Por favor, escribe tu nombre.");
        _nombre.focus();
        return false;
      }
    
    if (_email.value === "") {
        alert("Por favor, escribe tu email.");
        _email.focus();
        return false;
    }

    pruebaemail(_email.value);

    if (_asunto.value === "") {
        alert("Por favor, escribe tu asunto.");
        _asunto.focus();
        return false;
    }

    if (_mensaje.value === "") {
        alert("Por favor, escribe tu mensaje.");
        _mensaje.focus();
        return false;
    }

    alert("El formulario fue enviado. Gracias por contactarme");
  }

  function pruebaemail (valor){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('email no valido');
        _email.focus();
        return false;
	}
}
$( document ).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
});