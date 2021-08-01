function mostrar()
{
	let nota;
  nota = Math.floor(Math.random() * 10 + 1);

  if (nota == "9" || nota == "10") {
    alert("Excelenteee " + nota);
  } else if (nota >= "4" && nota < "9") {
    alert("Aprobo perri " + nota);
  } else if (nota < "5") {
    alert("Vamos, la proxima se puede " + nota);
  }
}//FIN DE LA FUNCIÓN