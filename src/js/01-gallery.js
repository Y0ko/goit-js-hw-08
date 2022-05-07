// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const onGalaryItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__link"><a class = "gallery__item" href=${original}>
    <img class= "gallery__image" src = "${preview}" alt = "${description}"\>
    </a>
    </li>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', onGalaryItems);

let onGalleryImages = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
onGalleryImages.on('show.simplelightbox');
