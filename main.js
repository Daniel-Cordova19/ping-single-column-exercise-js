// Estos correos ya se han apuntado a la notificación. Esto es para el ejercicio 2
const registeredEmails = [
  "paquita@gmail.com",
  "rosa@gmail.com",
  "faustino@gmail.com",
];

// PASO PREVIO: Añadir un listener al formulario para el event 'submit', y ejecutar el event.preventDefault()

document.querySelector('#formulario-registro').addEventListener('submit', function (event){ 
  event.preventDefault();


  document.querySelector('#mensaje').classList.remove('hidden');


  document.querySelector('#formulario-registro').style.display = 'none';

  let emailUsuaio = document.querySelector('.form__input').value;
  
  if (registeredEmails.includes(emailUsuaio)){
    document.querySelector('#textoEditar').textContent = 'El usuario con el correo ' + emailUsuaio + ' ya existe.'; document.querySelector('input').value = "";
  } else {
    document.querySelector('form').style.display = 'none';
    document.querySelector('#mensaje > p').textContent = 'Gracias por registrarte, te avisaremos cuando abramos!';
  }




  //esto lo hacemos para evitar que el usuario envia los datos a un sitio aún y no recarge la pagina.
});
