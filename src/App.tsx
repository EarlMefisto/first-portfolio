import "./App.css";
import styled from "styled-components";
import { Main } from "./layout/sections/main/Main";
import { MyServices } from "./layout/sections/myServices/MyServices";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <MyFirstPortfolio>
        <Main />
        <MyServices />
        <Contacts />
        <Footer />
      </MyFirstPortfolio>
    </div>
  );
}

export default App;

const MyFirstPortfolio = styled.div``;
