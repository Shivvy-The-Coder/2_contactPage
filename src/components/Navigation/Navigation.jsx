import style from "./Navigation.module.css"
const Navigation=()=>{

    console.log(style)
    
    return(
        <nav className={`${style.Navigation} container `}>
            <div className="logo">
                <img src="/images/cutlery.png" alt="logo" height="80px"/>
            </div>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    );
}
export default Navigation;