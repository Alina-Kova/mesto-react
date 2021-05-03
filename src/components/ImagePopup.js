export function ImagePopup(props) {
    return (
        <section className={props.card ? `popup popup_function_show popup_opened` : `popup popup popup_function_show`}>
            <div className="popup__section">
                <button className="popup__close-button popup__close-image popup__close" type="button" onClick={props.onClose}></button>
                <figure className="popup__wrapper">
                    <img src={props.card.link} className="popup__image" alt={props.card.name} />
                    <figcaption className="popup__caption">{props.card.name}</figcaption>
                </figure>
            </div>
        </section>
    )
}