
/*function cambiarContenido() {
    var select = document.getElementById("lista-temas");
    var contenidoDiv = document.getElementById("contenido");
    var temaSeleccionado = select.value;
  
    // Limpiar el contenido anterior
    contenidoDiv.innerHTML = "";
  
    // Mostrar el contenido correspondiente al tema seleccionado
    switch (temaSeleccionado) {
      case "tema1":
        contenidoDiv.innerHTML = "<h2>Tema 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
        break;
      case "tema2":
        contenidoDiv.innerHTML = "<h2>Tema 2</h2><p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
        break;
      case "tema3":
        contenidoDiv.innerHTML = "<h2>Tema 3</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
        break;
      default:
        contenidoDiv.innerHTML = "<p>Contenido no disponible</p>";
        break;
    }
  }*/
  
  function mostrarContenido() {
    var selector = document.getElementById("lista-temas");
    var boton = document.getElementById("boton-volver");
    var valorSeleccionado = selector.value;
  
    // Oculta todos los contenidos
    var todosLosContenidos = document.getElementsByClassName("contenido");
    for (var i = 0; i < todosLosContenidos.length; i++) {
      todosLosContenidos[i].style.display = "none";
    }
  
    // Muestra el contenido correspondiente al valor seleccionado
    var contenidoMostrado = document.getElementById("contenido-" + valorSeleccionado);
    contenidoMostrado.style.display = "block";

    var temaSeleccionado = document.getElementById("contenido-" + selector.value);
  
  if (selector.value !== "") {
    temaSeleccionado.style.display = "block";
    boton.style.display = "block";
  }
  }

  function volverAlInicio() {
    // Recargar la página para reiniciar
    window.location.reload();
  }
  
  