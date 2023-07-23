import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");

function gallaryCreate() {
    const galleryList = galleryItems.map(item =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        alt="${item.description}" 
        target="_parent"/>
        </a>
        </li>`)
        .join("");
    
    galleryUl.innerHTML = galleryList;
};

gallaryCreate();

let galleryBox = new SimpleLightbox('.gallery a', {
    captions: "true",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
            
});

