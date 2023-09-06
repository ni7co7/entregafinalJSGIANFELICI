
function cargarValores() {
    var selectA = document.getElementById('selectA');
    var selectB = document.getElementById('selectB');
    var combinacionValores = document.getElementById('combinacionValores');

    var seleccionA = selectA.value;
    var seleccionB = selectB.value;

    // Crear una clave de combinación a partir de las selecciones
    var combinacion = seleccionA + "-" + seleccionB;

    // Realizar una solicitud HTTP para cargar el archivo JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Obtener la ruta de la imagen basada en la combinación de selecciones
            var imagenSrc = data.combinaciones[combinacion];

            if (imagenSrc) {
                // Crear un elemento de imagen
                var imagenElement = document.createElement('img');
                imagenElement.src = imagenSrc;
                imagenElement.alt = "Imagen de la combinación";

                // Mostrar la imagen en la página
                combinacionValores.innerHTML = ''; // Limpiar contenido anterior
                combinacionValores.appendChild(imagenElement);
            } else {
                // Mostrar un mensaje si no se encuentra la ruta
                combinacionValores.textContent = "Combinación no válida";
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON: ', error);
        });
}


























/* const tipoDesarrolloSelect = document.getElementById('tipoDesarrollo'); //referencio el tipo de desarrollo
const cantidadHabitacionesSelect = document.getElementById('cantidadHabitaciones'); //referencio cant de habitaciones
const resultadosDiv = document.getElementById('resultados'); //referencio el div donde se imprime el resultado
const filtrarBtn = document.getElementById('filtrarBtn');//referencio el boton con la acci+on
const image = document.getElementById("image");//referencio la imagen       NO LOGRE QUE ME DEVUELVA LA IMAGEN QUE CORRESPONDE A LA COMBINACIÖN; ME DEVOLVIA [object HTMLImageElement] oundefined. probando con .fin .filter .outerHTML .appendChild
const pictureDiv = document.getElementById("picture");//referencio el div de img


filtrarBtn.addEventListener('click', async () => { //espero por evento click
  const selectedTipoDesarrollo = tipoDesarrolloSelect.value; //capturo el valor elegido
  const selectedCantidadHabitaciones = cantidadHabitacionesSelect.value;//capturo el valor elegido
  
 
  
  
  if (!selectedTipoDesarrollo || !selectedCantidadHabitaciones) {
   resultadosDiv.textContent = "Por favor elija opciones.";
   return;
  }

  const selectedCombinedOption = `${selectedTipoDesarrollo} | ${selectedCantidadHabitaciones} `;//capturo la combinacion
  try {

    const response = await fetch("data/propiedad.json"); //busco obj del json
    const propiedad = await response.json();
    

    
    const matchedItem = propiedad.map(item => { //genero un array nuevo
     
    
     return `${item.propiedad.nombre} | ${item.propiedad.habitaciones}` === selectedCombinedOption;

      
   }); 
    
    resultadosDiv.innerHTML = ''; 
     console.log(selectedCombinedOption) 
     
    
    if (matchedItem ) {
    /*  matchedItem = JSON.parse(matchedItem) */
     /*  image.src = propiedad[1].propiedad.imagen; */
     

      resultadosDiv.append(selectedCombinedOption  )//imprimo el resultado
    

      /* const imagen = `${selectedCombinedOption}  ${propiedad.matchedItem.imagen}`; */
    
      /* pictureDiv.append(imagen) =/*  `
      
      <img src=${"propiedad.imagen"} class="imgs">
      
      `   */ 
      
     } else {
      resultadosDiv.textContent = "No se encontraron resultados.";
     }
    } catch (error) {
    console.error("Error al cargar o procesar el JSON:", error);
    }
});  

 */





