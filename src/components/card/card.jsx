import Button2 from "../forms/button2/button2";
import styles from "./card.module.css";

const Card = ({ children, img }) => {
  return (
    <div className={styles.racao1}>
      <img src={img} alt="rações para cães" width={"275"} />
      <p>{children}</p>
      <Button2>Compre Agora</Button2>
    </div>
  );
};

export default Card;
