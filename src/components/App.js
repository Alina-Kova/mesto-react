import React from 'react';
import { Header } from './Header.js'
import { Main } from './Main.js'
import { Footer } from './Footer.js'
import { PopupWithForm } from './PopupWithForm.js';
import { ImagePopup } from './ImagePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };

  function handleCardClick(card) {
    setSelectedCard(card)
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <>
      <div className="page">
        <Header />

        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />

        <Footer />

        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title="Редактировать профиль" buttonText="Сохранить" name="edit-profile">
          <div className="popup__input" name="popupform">
            <input type="text" name="fullname" placeholder="Имя" className="popup__text popup__text_type_name"
              id="name-input" required minLength="2" maxLength="40" />
            <span className="popup__error" id="name-input-error"></span>
            <input type="text" name="occupation" placeholder="Род деятельности"
              className="popup__text popup__text_type_occupation" id="occupation-input" required minLength="2"
              maxLength="400" />
            <span className="popup__error" id="occupation-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title="Новое место" buttonText="Создать" name="add-card">
          <div className="popup__input popup__input_function_add" name="popupform">
            <input type="text" name="placename" placeholder="Название"
              className="popup__text popup__text_type_place" id="place-input" required minLength="2"
              maxLength="30" />
            <span className="popup__error place-input-error" id="place-input-error"></span>
            <input type="url" name="url" placeholder="Ссылка на картинку"
              className="popup__text popup__text_type_link" id="link-input" required />
            <span className="popup__error" id="link-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title="Обновить аватар" buttonText="Сохранить" name="change-avatar" >
          <div className="popup__input">
            <input type="url" name="link" placeholder="Ссылка на картинку"
              className="popup__text popup__text_type_avatar-link" id="url-input" required />
            <span className="popup__error" id="url-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} title="Вы уверены?" buttonText="Да" name="delete-card" />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </>
  );
}

export default App;