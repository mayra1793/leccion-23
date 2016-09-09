window.addEventListener("load", function() {
		var boton = document.getElementById("mostrar");
		boton.addEventListener("click", function() {		
			var nombre = document.getElementById("nombres").value;
            var edad = parseInt(document.getElementById("edades").value);
            var sexo = document.getElementById("sexos").value;
           
           var humano = new Persona(nombre, edad, sexo);
           
           var rpta = document.getElementById("resultado");
           rpta.innerHTML = humano.presentacion();
           
        });
});
function Persona(nombre, edad, genero) {
	this.nombre = nombre;
	this.edad = edad;
	this.genero = genero;
	this.mayorDeEdad = (this.edad >= 18);
	this.presentacion = function () {
		return "soy " + this.nombre + ", tengo " + this.edad + "y soy " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad";
	}
}
