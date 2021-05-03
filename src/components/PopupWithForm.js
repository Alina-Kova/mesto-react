export function PopupWithForm(props) {
  return (
    <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}>
      <button className="popup__close-button" type="button" onClick={props.onClose}></button>
      <div className="popup__container">
        <form className="popup__input" name={props.name} noValidate>
          <h2 className="popup__header">{props.title}</h2>
          {props.children}
          <input type="submit" name="submitbutton" value={props.buttonText}
            className={`popup__submit ${props.button}`} />
        </form>
      </div>
    </section>
  )
}