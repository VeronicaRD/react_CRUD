


const Button = ({ color, name, onClick}) => {
    return(
         <button 
         onClick={onClick}
         style= {{backgroundColor: color}}
         className ='btn'> {name}
        </button>
)
}

Button.defaultProps = {
    color: 'green'
}
export default Button