document.getElementById("boton").onclick = function() {
    var nombre = document.getElementById("nombre").value;
    if (nombre == "") alert("Ningún Saludo");
    else alert("Hola " + nombre);
}