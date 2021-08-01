function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad > 17) {
    alert("es mayor de edad");
  } else {
    alert("es menorr de edad");
  }
} //FIN DE LA FUNCIÓN
