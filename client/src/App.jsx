import Nav from "./components/nav/nav";
import "./App.css";
import Promo from "./components/promo/promo";
import Container from "./components/forms/container/container";
import Rodape from "./components/rodape/rodape";

const App = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>

      <div className="container">
        <Container>
          <Promo></Promo>
        </Container>
      </div>
      <div>
        <Rodape />
      </div>
    </div>
  );
};

export default App;
