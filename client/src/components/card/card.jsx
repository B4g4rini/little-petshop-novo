import styles from "./card.module.css";
import Swal from "sweetalert2";

const Card = ({ children, img }) => {
  const alert2 = async () => {
    const resultado = await fetch("Comprado");

    Swal.fire({
     
      background: " white ",
      
      title: "Compra Realizada!",
      text: "A LittlePetshop agradece sua compra!",
      color: "black",
      icon: "info",
      iconColor:"cyan",
      confirmButtonText: "Finalizar",
    });
  };
  return (
    <div className={styles.racao1}>
      <img src={img} alt="rações para cães" width={"275"} />
      <p>{children}</p>
      <button className={styles.btn} onClick={alert2}>
        Compre Agora
      </button>
    </div>
  );
};

export default Card;
