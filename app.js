//captura de boton VER MAS!
const btnOrar = document.getElementById('oracion');
//captura de id modal
const modal = document.getElementById('modal');
//captura de boton cerrar
const btnCerrar = document.getElementById('verMas');



btnOrar.addEventListener('click', () => {
    modal.classList.add('modal__contenedor--activo');
  
   
});

btnCerrar.addEventListener('click', () => {
    modal.classList.remove('modal__contenedor--activo');
  
});

