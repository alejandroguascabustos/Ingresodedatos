// 1. Se crea una función

function mostrarNombre(){
// 2. Luego, dentro de la función se crea una variable que almacena lo que el usuario digitó con getElementById
    let elementoNombre = document.getElementById("nombreDeUsuario")
    let elementoApellido = document.getElementById("apellidoDeUsuario")
    let elementoTelefono= document.getElementById("telefonoDeUsuario")

// 3. Se crea otra variable para poder cambiar el elemento H1 luego de que el usuario digite datos en la caja de texto
    let elementoTexto = document.getElementById("salida");
// 4. Tomamos la variable elementoTexto y le agregamos el metodo textContent que es igual a "Tu te llamas" concatenado con el valor digitado por el usuario
    elementoTexto.textContent = "Tu te llamas "+ elementoNombre.value +" "+ elementoApellido.value +" y tu telefono es: "+ elementoTelefono.value;
}