// Selecciona el elemento con el ID 'bMore' y lo asigna a la variable 'bMore'
const bMore = document.querySelector('#bMore');

// Selecciona el elemento con el ID 'links' y lo asigna a la variable 'links'
const links = document.querySelector('#links');

// Agrega un evento de escucha de clic al elemento 'bMore'
bMore.addEventListener('click', e => {
    // Cuando se hace clic en 'bMore', se ejecuta esta función de devolución de llamada (callback)

    // Alterna la clase 'collapsed' en el elemento 'links'
    links.classList.toggle('collapsed');
});
