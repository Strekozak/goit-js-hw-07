import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");
galleryUl.addEventListener("click", onClick)

function gallaryCreate() {
    const galleryList = galleryItems.map(item =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" 
        target="_parent"/>
        </a>
        </li>`)
        .join("");
    
    galleryUl.innerHTML = galleryList;
};

gallaryCreate();

function onClick(event) {
    event.preventDefault();
    galleryItems.forEach(function (item) {
        if (event.target.src === item.preview) {
        const instance = basicLightbox.create(`<img src="${item.original}" width="800" height="600">`);
            instance.show();
            document.body.addEventListener("keydown", (e) => {
			if (e.code === "Escape") {
				instance.close();
            }
        })
    }
    })
        
}



