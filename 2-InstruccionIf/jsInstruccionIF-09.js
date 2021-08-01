function mostrar() {
  let nota;
  nota = Math.floor(Math.random() * 10 + 1);

  if ((nota == "9" && nota == "10")) {
    alert("Excelenteee");
  } else if (nota >= "4" && nota < "9") {
    alert("Aprobo perri");
  } else if (nota < "5") {
    alert("Vamos, la proxima se puede");
  }

  //"EXCELENTE" para notas igual a 9 o 10,
  //"APROBÓ" para notas mayores a 4,
  //"Vamos, la proxima se puede" para notas menores a 4
} //FIN DE LA FUNCIÓN
