import Button from "../Button/Button";
import style from "./Contact_form.module.css"
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
const Contact_form = () => {
            const [name,setName]= useState("Shivam")
            const [email,setEmail]= useState("Krshivam455@gmail.com")
            const [text,setText]= useState("kajsdkjshdkjhd")

      // if any one press the button call
      const onSubmit=(e)=>{
            e.preventDefault();

          setName(e.target[0].value);
          setEmail(e.target[1].value);
          setText(e.target[2].value);
      //     console.log(name +" "+ email +" " + text)
      //      console.log(e);
      }


  return (
        <section className={style.container}>
               
               <div className={style.contact_form}>
                <div className={style.top_button}>
                <Button  text="VIEW SUPPORT CHAT" icon={<MdMessage fontSize="24px"/> } />

                <Button  text="VIEW CALL" icon={<FaPhone fontSize="24px"/>} />

                </div>
                <Button isoutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>} />


                 <form onSubmit={onSubmit}>

                  <div className={style.form_control}>
                        <label>Name:</label>
                        <input type="text" name="Name"  />
                  </div>
                  
                  <div className={style.form_control}>
                        <label>Email:</label>
                        <input type="text" name="Name"  />
                  </div>

                  <div className={style.form_control}>
                        <label>Text:</label>
                        <textarea name="text" rows="8"></textarea>
                  </div>

                  {/* below here is the image of helpline divided using the flex display with class container */}
                  <div style={{display:"flex" ,justifyContent:"end"}}>
                  <Button type="submit" text="SUBMIT" />
                  </div>

                        <div>
                              {name +" "+email +" "+text}
                        </div>

                 </form>
   
               </div>
               <div className={style.contact_image}>
                <img src="./images/helpline.png" alt="" />
                 </div>

        </section>
  )
}

export default Contact_form