const SlideClick = (e) => {
    const id = e.target.dataset.id;
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;
    console.log('Cargar imagen slide', id, 'y su categoria es ', categoriaActiva);
}

export default SlideClick