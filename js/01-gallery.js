import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItems.map(image => `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
        <img
            class="gallery__image"
            src=${image.preview}
            data-source=${image.original}
            alt=${image.description}
        />
    </a></div>`).join('');

gallery.addEventListener('click', showImage);

function showImage(event) {
    event.preventDefault();
    if ('IMG' !== event.target.nodeName) { return };
    createLightBoxImage(event.target.dataset.source);
};

function createLightBoxImage(source) {
    basicLightbox.create(`<img src='${source}'>`).show();
};
