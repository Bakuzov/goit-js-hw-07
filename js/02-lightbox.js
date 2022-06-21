import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const gallaryItems = galleryItems.map((element) => {
  return `<a class="gallery__item" href=${element.original}>
  <img class="gallery__image" src=${element.preview} alt=${element.description} />
</a>`;
});

galleryEl.insertAdjacentHTML("afterbegin", gallaryItems.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  animationSpeed: 250,
  captionsData: "alt",
  captionDelay: 250,
});

// <div class="gallery">
//   <a href="images/image1.jpg">
//     <img src="images/thumbs/thumb1.jpg" alt="" title="" />
//   </a>
//   <a href="images/image2.jpg">
//     <img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image" />
//   </a>
// </div>;
