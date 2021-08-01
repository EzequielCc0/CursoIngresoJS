function mostrar() 
{
  let mes;
  mes = document.getElementById("txtIdMes").value;

  switch (mes) 
  {
    
    case "Febrero":
      alert("Este mes no tiene mas de 29 dias");
      break;
	//case "Julio":
   // case "Agosto":
   // case "Enero":
   // case "Marzo":
  //  case "Abril":
   // case "Mayo":
   // case "Junio":
   // case "Septiembre":
   // case "Octubre":
   // case "Noviembre":
  //  case "Diciembre":
  default :
      alert(" este mes tiene mas de 30 dias");
      break;
  }

  //al seleccionar un mes informar.
  //si es Febrero: " Este mes no tiene más de 29 días."
  //si NO es Febrero: "Este mes tiene 30 o más días"
} //FIN DE LA FUNCIÓN
