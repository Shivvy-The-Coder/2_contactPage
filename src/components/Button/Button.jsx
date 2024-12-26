import style from "./Button.module.css"

const Button = ({isoutline,icon,text, ...rest }) => {

    let buttonclass = style.primary_btn;
    if(isoutline)
            buttonclass=style.outline_btn;

    return(
        
        <div>
            <button            
            {...rest}
            className={buttonclass}>
                {icon}
                {text}
            </button>
        </div>
    );




}



export default Button;
