import styles from "./promo.module.css";
import animal from "../../assets/animal.png";
import racao1 from "../../assets/racao1.png";
import racao2 from "../../assets/racao2.png";
import racao3 from "../../assets/racao3.png";
import Button2 from "../forms/button2/button2";
import Button from "../forms/button/button";
import Card from "../card/card";

const Promo = () => {
  return (
    <div className={styles.promo}>
      <img src={animal} alt="foto de vários animais domésticos" width={"650"} />
      <div className={styles.anuncios}>
        <p>Nutrientes Caninos & Comidas</p>
        <h4>25% de Desconto nos Produtos</h4>
      </div>
      <div className={styles.mais}>
        <Button>
          <h6> Veja Mais  </h6>
        </Button>
      </div>

      <div className={styles.racoes}>
        <Card img={racao1}>
          Ração Golden Fórmula para Cães Senior Sabor Frango e Arroz - 15kg
        </Card>

        <Card img={racao2}>
          Ração Golden Duii para Cães Adultos Sabor Salmão com Ervas e Cordeiro
          com Arroz - 10,1kg
        </Card>

        <Card img={racao3}>
          Ração Golden Seleção Natural para Cães Sênior de Porte Médio e Grande
          Sabor Frango e Arroz 12kg
        </Card>

      
      </div>

      <div className={styles.compra}></div>
      <div className={styles.circulos}>
        <img
          src="src/assets/circulos.png"
          alt="circulos laranjas um em cima do outro"
          width={"300"}
        />
      </div>
    </div>
  );
};

export default Promo;
