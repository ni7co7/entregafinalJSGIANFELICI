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
