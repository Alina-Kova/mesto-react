import React from 'react';
import { api } from '../utils/api.js';
import { Card } from './Card.js';

export function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getPersonalInfo(), api.getInitialCards()])
      .then(([data, cardData]) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
        setCards(cardData);
      })
      .catch(err => console.log(err));
  },
    []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__section">
          <div className="profile__avatar-section">
            <img src={userAvatar} alt="фото профиля" className="profile__avatar" onClick={props.onEditAvatar} />
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h1 id="name" className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditProfile} />
            </div>
            <p id="description" className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} />
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map(card => {
            return (<Card card={card}
              onCardClick={props.onCardClick}
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
            />)
          })}
        </ul>
      </section>
    </main>
  )
}