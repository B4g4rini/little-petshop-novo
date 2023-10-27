import styles from "./nav.module.css"
import logo from "../../assets/logo.svg";
import Button from "../forms/button/button"


const Nav = () => {
    return (
      <div className={styles.bar}>
        <div className={styles.logo}>
        
          <img src={logo} alt="logo da little-petshop" width={"72"} />
          
          Little Petshop
          
          
        </div>
        <div className={styles.abas}>
      
            <a>Serviços</a>
            <a>Produtos</a>
            <a>Localização</a>
            <a>Contato</a>
            <a>Login</a>

        
        </div>

     
        
    
      </div>
    );
  };
  
  export default Nav;