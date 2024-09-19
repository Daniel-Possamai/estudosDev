import "./button.css"


const sayHello = () => {
    console.log("hellou")
}

function Button(props){
    return(
        <button onClick={sayHello} className={ "btn" }>{props.label}</button>
    )
}

Button.defaultProps = {
    label: "Click Me"
}

export default Button;