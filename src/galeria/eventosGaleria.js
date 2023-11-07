import cerrarGaleria from "./cerrarGaleria";
import SlideClick from "../slideClick";

const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');

    if (boton?.dataset?.accion === 'cerrar-galeria') {
        cerrarGaleria();

    }

    // carousel slide click



    if (e.target.dataset.id) {
        SlideClick(e);
    }
})