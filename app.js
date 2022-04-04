
const btnOrar = document.getElementById('oracion');
const modal = document.getElementById('modal');
const btnCerrar = document.getElementById('verMas');



btnOrar.addEventListener('click', () => {
    modal.classList.add('modal__contenedor--activo'); 
});

btnCerrar.addEventListener('click', () => {
    modal.classList.remove('modal__contenedor--activo');
});

