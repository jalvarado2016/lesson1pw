document.body.style.backgroundColor = "#AA0000";
/*LISTA ORDENADA DE ELEMENTOS*/
function printList ( list ) {
	var listHTML = '<ol>';
	for (var i = 0; i < list.length; i++)
		{listHTML += '<li>' + list[i] + '</li>';}
	listHTML += '<ol>';
	print(listHTML);
}
//ESTA FUNCION IMPRIME EL HTML QUE LE DEMOS
function print(html) {
	document.write(html);
}
var estudiantes = ["Adrian","Hanna","Heather","Michelle","Ashley"];
var genero = ["Masculino" , "Femenino" , "Femenino" , "Femenino" , "Femenino"];
var edad = ["18" , "16" , "22" , "17" , "15"];
var notas = ["10" , "10" , "10" , "10" , "10"];
var ciudad = ["Playas" , "Manta" , "Guayaquil" , "Machala" , "Quito"];
var lenguaje = ["C++" , "JAVA" , "JOMMLA" , ".NET" , "SQL"];
var trabajo = ["Solo cachuelos" , "De vez en cuando" , "Sí" , "Sí" , "De repente"];

while (true)
{ 
		var buscar  = prompt("Ingrese el nombre del estudiantes, sino presione l para ver la lista de estudiantes o s para Salir: ");
		if (buscar == "s")
		{
		break;
		}
		else if (buscar == "l")
		{
		var html = "<h1>Registro de estudiante</h1>";
		print(html);	
		printList(estudiantes);
				
		}
		else
	{
		var buscado = estudiantes.indexOf(buscar);
		if (buscado >= 0)
		{
		var html = "<h1>Registro de estudiante</h1>";
		print(html);	
		printList(estudiantes,genero,edad,notas);
		}
		else if (buscado < 0)
		{
		alert("No existe el estudiante");
		}

 	}
}
