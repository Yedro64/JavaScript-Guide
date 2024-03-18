/*const copiarCodigo = document.querySelectorAll('.copiar-codigo');

copiarCodigo.forEach((boton) => {
  boton.addEventListener('click', () => {
    const codigo = boton.parentNode.querySelector('.hljs').textContent;
    navigator.clipboard.writeText(codigo).then(() => {
      alert('¡Código copiado!');
      boton.classList.add('copiado');
      setTimeout(() => {
        boton.classList.remove('copiado');
      }, 1000);
    });
  });
});*/

const copiarCodigo = document.querySelectorAll('.copiar-codigo');

copiarCodigo.forEach((boton) => {
  boton.addEventListener('click', () => {
    const codigo = boton.parentNode.querySelector('.hljs').textContent;
    navigator.clipboard.writeText(codigo).then(() => {
      const mensajeCopiado = boton.querySelector('.mensaje-copiado');
      mensajeCopiado.style.display = 'block';
      setTimeout(() => {
        mensajeCopiado.style.display = 'none';
      }, 1000);
    });
  });
});
