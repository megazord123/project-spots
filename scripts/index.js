const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const addCardBtn = document.querySelector(".profile__add-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#profile-edit-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close");

const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileNameInput = editProfileModal.querySelector("#profile-name-input");

const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const addCardModal = document.querySelector("#add-card-modal");

const addCardCloseBtn = addCardModal.querySelector(".modal__close");

const addCardFormEl = addCardModal.querySelector(".modal__form");

const captionInputEl = addCardFormEl.querySelector("#card-caption-input");

const linkInputEl = addCardFormEl.querySelector("#card-link-input");

const previewModal = document.querySelector("#modal_type_preview");

const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");

const previewImageEl = previewModal.querySelector(".modal__image");

const previewCaptionEl = previewModal.querySelector(".modal__caption");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitleEl = cardElement.querySelector(".card__title");

  const cardImageEl = cardElement.querySelector(".card__image");

  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  cardLikeBtnEl.addEventListener("click", function () {
    cardLikeBtnEl.classList.toggle("card__like-button-active");
  });

  const cardDeleteBtnEL = cardElement.querySelector(".card__delete-button");

  cardDeleteBtnEL.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", function () {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;

    previewCaptionEl.textContent = data.name;

    openModal(previewModal);
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  profileNameInput.value = profileNameEl.textContent;

  profileDescriptionInput.value = profileDescriptionEl.textContent;

  openModal(editProfileModal);
});

addCardBtn.addEventListener("click", function () {
  openModal(addCardModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

addCardCloseBtn.addEventListener("click", function () {
  closeModal(addCardModal);
});

previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  profileNameEl.textContent = profileNameInput.value;

  profileDescriptionEl.textContent = profileDescriptionInput.value;

  closeModal(editProfileModal);
});

addCardFormEl.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const newCardData = {
    name: captionInputEl.value,
    link: linkInputEl.value,
  };

  const newCardElement = getCardElement(newCardData);

  cardsList.prepend(newCardElement);

  addCardFormEl.reset();

  closeModal(addCardModal);
});

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);

  cardsList.append(cardElement);
});
