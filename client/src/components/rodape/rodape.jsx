import styles from "./rodape.module.css"
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import SocialLinks from "../socialLinks/socialLinks";



const Rodape = ({ children, link }) => {
    return (
      <div className={styles.inform}>
        <div className={styles.icons}>
        <p>
        <a href={link} target="_blank">
          {children}
        </a>
      </p>
      <p>© 2023 Little Petshop</p>
      <p>Localização:Avenida Ana Claudina Nº600</p>
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/"} />
        <SocialLinks icon={"logo-facebook"} href={"https://www.facebook.com/"} />
        <SocialLinks icon={"logo-whatsapp"} href={"https://www.whatsapp.com/"} />
        </div>

        
  
     

     
        
    
      </div>
    );
  };
  
  export default Rodape;