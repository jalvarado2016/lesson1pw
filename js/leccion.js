/*var preguntas = [
{ pregunta: "Nombre: ", respuesta: "Adrian"},
{ pregunta: "Género: ", respuesta: "Masculino"},
{ pregunta: "Edad: ", respuesta: 17},
{ pregunta: "Notas: ", respuesta: 10},
{ pregunta: "Ciudad: ", respuesta: "Playas"},
{ pregunta: "Lenguaje Favorito: ", respuesta: "Jommla"},
{ pregunta: "Estás Trabajando: ", respuesta: "Solo cachuelos"},];
*/
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
var estudiantes = []; 
estudiantes.push("Adrian","Hanna","Heather","Michelle","Ashley");
var genero = []; 
genero.push("Masculino" , "Femenino" , "Femenino" , "Femenino" , "Femenino");
var edad = []; 
edad.push("18" , "16" , "22" , "17" , "15");
var notas = []; 
notas.push("10" , "10" , "10" , "10" , "10");
var ciudad = [];
ciudad.push("Playas" , "Manta" , "Guayaquil" , "Machala" , "Quito");
var lenguaje = [];
lenguaje.push("C++" , "JAVA" , "JOMMLA" , ".NET" , "SQL");
var trabajo = [];
trabajo.push("Solo cachuelos" , "De vez en cuando" , "Sí" , "Sí" , "De repente");

while (true)
{ 
		var buscar  = prompt("Ingrese el nombre del estudiantes, sino presione l para ver la lista de estudiantes o s para Salir: ");
		if (buscar == "s")
		{
		break;
		}
		else if (buscar == "l")
		{
		printList(estudiantes,genero);
				
		}
		else
	{
		var buscado = estudiantes.indexOf(buscar);
		if (buscado >= 0)
		{
		printList(estudiantes);
		}
		else if (buscado < 0)
		{
		alert("No existe el estudiante");
		}

 	}
}