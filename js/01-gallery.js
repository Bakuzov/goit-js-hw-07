import { galleryItems } from "./gallery-items.js";
const galleryEl = document.querySelector(".gallery");
let instance;

const gallaryItems = galleryItems.map(
  ({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
);

galleryEl.insertAdjacentHTML("afterbegin", gallaryItems.join(""));

galleryEl.addEventListener("click", handleClickImg);

function handleClickImg(event) {
  event.preventDefault();

  //basiclightbox librery
  instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}" width="
    200" height="200"> `,
    {
      onShow: () => {
        window.addEventListener("keydown", escButtonClick);
      },
      onClose: () => {
        window.removeEventListener("keydown", escButtonClick);
      },
    }
  );
  instance.show();
}

// function escButtonClick(event) {
//   if (event.key === "Escape") {
//     instance.close();
//   }
// }
function escButtonClick(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
