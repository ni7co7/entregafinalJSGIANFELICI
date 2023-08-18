 
// Calcula el precio de dibujo entre 3 softwares basandose en el cálculo de metros cuadrados, tiempo de desarrollo y precio por hora según cada programa

// Guarda un array que es una lista con los nombres de usuarios y su consulta en el calculador de m2



// Array de usuarios vacios
let usuarios = [];


// Corrobora los usuarios anteriores

const UsuariosGuardados = localStorage.getItem("usuarios");
if (UsuariosGuardados) {
  usuarios = JSON.parse(UsuariosGuardados);
  mostrarUsuarios();
}



// referencia a los inptus


function calcularMetrosCuadrados(){
  
    const ancho = parseInt(document.getElementById("ancho").value);
    const largo = parseInt(document.getElementById("largo").value);
    const desarrollo = (document.getElementById("desarrollo").value);
    const nombre = document.getElementById("nombre").value
   


    const metrosCuadrados = ancho * largo;
   
    

    switch (desarrollo){
        case "sketchUp":
        tiempo = 0.5;
        precio = 10 * tiempo;

        break;

        case "autoCad":
            tiempo = 1;
            precio = 15 * tiempo;
    
        break;

        case "render3d":
            tiempo = 2;
            precio = 20 * tiempo;
    
        break;


        

        default:
           document.getElementById("resultado").innerHTML="ingrese un programa de las 3 opciones"    
        return; 
        

    }


    
  const tiempoTotal = tiempo * metrosCuadrados;
  const precioTotal = precio * metrosCuadrados;



    console.log(precioTotal)
    console.log(tiempoTotal)
   
    // renderiza los resultados en el html

    const resultado = document.getElementById("resultado").innerHTML = metrosCuadrados + " m2"
    const resultado2 = document.getElementById("resultado2").innerHTML = "$ " + precioTotal
    const resultado3 = document.getElementById("resultado3").innerHTML =  tiempoTotal + " hora/s " 
   
        // usuario clave/valor

  const usuario = {
    nombre: "Nombre: " + nombre,
    ancho: "Ancho: " + ancho + " metros",
    largo: "Largo: " + largo + " metros",
    tipoDesarrollo: "Tipo de desarrollo: " + desarrollo,
    metrosCuadrados: "Área: " + metrosCuadrados + " m²",
    tiempoTotal: "Tiempo total: " + tiempoTotal + " hora/s",
    precioTotal: "Precio total: $" + precioTotal,
  };

      // agrega usuarios al array


  usuarios.push(usuario);

   // guardo
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
   // llamo a la función para mostrar usuarios

  mostrarUsuarios();


  
}

function mostrarUsuarios() {
  const usuariosContainer = document.getElementById("usuariosContainer"); // ref al container usuarios
  
  usuariosContainer.innerHTML = ""; // voy a agregar texto

  usuarios.forEach(usuario => {
    const usuarioElement = document.createElement("div");
    usuarioElement.innerHTML = `
      <p>${usuario.nombre}</p>
      <p>${usuario.ancho}</p>
      <p>${usuario.largo}</p>
      <p>${usuario.tipoDesarrollo}</p>
      <p>${usuario.metrosCuadrados}</p>
      <p>${usuario.tiempoTotal}</p>
      <p>${usuario.precioTotal}</p>
      <hr>
    `;
    usuariosContainer.appendChild(usuarioElement);
  });
  
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
 
  
}

// referencia al botón y al contenedor de usuarios
const mostrarBtn = document.getElementById("mostrarBtn");
const usuariosContainer = document.getElementById("usuariosContainer");

// evento click al botón
mostrarBtn.addEventListener("click", function() {
  // ocultar/mostrar contenedor
  if (usuariosContainer.style.display === "none") {
    usuariosContainer.style.display = "block";
  } else {
    usuariosContainer.style.display = "none";
  }
});




// FIN















/* window.onload = calcularMetrosCuadrados (); {
  const UsuariosGuardados = localStorage.getItem("usuarios");
  if (UsuariosGuardados) {
    usuarios = JSON.parse(UsuariosGuardados);
    mostrarUsuarios();
  }
};
 */




 





























 
 





