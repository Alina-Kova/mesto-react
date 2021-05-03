export function Card (props) {

    //обработчик клика по картинке в карточке
    function handleClick() {
      props.onCardClick(props.card);
      } 
      
      return (
        <li className="elements__card">
        <button className="elements__delete" type="button"></button>
        <img src={props.link} className="elements__photo" alt={props.name} onClick={handleClick} />
        <div className="elements__caption">
            <h2 className="elements__card-name">{props.name}</h2>
            <div className="elements__like-section">
            <button className="elements__like" type="button"></button>
            <span className="elements__like-count">{props.likes}</span>
            </div>
        </div>
    </li>
      )
}