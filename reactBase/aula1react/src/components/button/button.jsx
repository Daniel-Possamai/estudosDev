import "./button.css"

function Button(props){
    return(
        <button className={ "btn" }>{props.label}</button>
    )
}

Button.defaultProps = {
    label: "Click Me"
}

export default Button;