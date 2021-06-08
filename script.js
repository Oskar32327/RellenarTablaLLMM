const nombre = document.getElementById("nombre");
const posicion = document.getElementById("posicion");
const numero = document.getElementById("numero");

const tabla = document.getElementById("tablaJugadores");
const boton = document.getElementById("addJugadorBoton");

boton.onclick = addJugador;

function addJugador(){
	if (nombre.value != "" && posicion.value != "" && numero.value != "") {
	tabla.insertRow().innerHTML =
	"<td>"+ nombre.value + "</td>"+
	"<td>"+ posicion.value + "</td>"+
	"<td>"+ numero.value + "</td>";
	nombre.value="";
	posicion.value="";
	numero.value="";
	}else{
		alert("Faltan campos por rellenar");
	}
}
