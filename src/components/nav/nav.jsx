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
      
            <Button>Serviços</Button>
            <Button>Produtos</Button>
            <Button>Localização</Button>
            <Button>Contato</Button>
            <Button>Login</Button>

        
        </div>

     
        
    
      </div>
    );
  };
  
  export default Nav;