import NavBar from "./components/NavBar";
import Timer from "./components/Timer";
import MainContent from "./components/MainContent";
import Companies from "./components/Companies";
import Tools from "./components/Tools";
import Invest from "./components/Invest";
import Bonus from "./components/Bonus";
import Clients from "./components/Clients";
import Speed from "./components/Speed";
import Stats from "./components/Stats";
import Gadgets from "./components/Gadgets";
import Add from "./components/Add";
import Investphone from "./components/Investphone";
import Questions from "./components/Questions";
import Order from "./components/Order";
import Form from "./components/Form";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Timer />

      <MainContent />

      <Companies />

      <Tools />

      <Invest />

      <Bonus />

      <Stats />

      <Gadgets />

      <Clients />

      <Speed />

      <Add />

      <Investphone />

      <Questions />

      <Order />

      <Form />

      <Footer />
    </div>
  );
}

export default App;
