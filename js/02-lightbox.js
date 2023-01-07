import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallerie = document.querySelector('.gallery');

gallerie.innerHTML = galleryItems.map(image =>
`<a class="gallery__item" href='${image.original}'>
  <img class="gallery__image" src='${image.preview}' alt='${image.description}' />
</a>`).join('');
const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
  captionDelay: 250,
});
