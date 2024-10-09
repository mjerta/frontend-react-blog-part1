import "./Button.css"

function Button({type, buttonText, className, onClick}) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}>
      {buttonText}
    </button>
  )
}

export default Button;