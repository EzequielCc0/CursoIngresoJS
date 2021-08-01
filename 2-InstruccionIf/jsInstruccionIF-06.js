function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
  
	if (edad < 18 && edad > 12) {
	  alert("es adolecente");
	}else{
	if (edad < 13) {
		alert("es un niñooo");
	}
	else{ 	
		alert("es adultoooo");
	}
}


}//FIN DE LA FUNCIÓN