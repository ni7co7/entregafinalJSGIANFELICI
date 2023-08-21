document.addEventListener("DOMContentLoaded", () => {
    const miImagen = document.getElementById("miImagen");
    const transformaciones = ["zoom-normal", "zoom-in", "zoom-out", "posicion-normal",/*  "posicion-derecha", "posicion-izquierda", "posicion-abajo" */];
    let indiceTransformacion = 0;
    let isTransitioning = false; // Para evitar cambios durante la transición
  
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const umbral = 200;
  
      if (scrollY >= umbral && !isTransitioning) {
        isTransitioning = true;
  
        miImagen.classList.remove(transformaciones[indiceTransformacion]);
        indiceTransformacion = (indiceTransformacion + 1) % transformaciones.length;
  
        // Aplicar la siguiente transformación después de un retraso
        setTimeout(() => {
          miImagen.classList.add(transformaciones[indiceTransformacion]);
          isTransitioning = false;
        }, 1000); // Ajusta el tiempo de retraso (en milisegundos) según tus preferencias
      }
    });
  });