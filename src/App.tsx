import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { MySkills } from "./layout/sections/mySkills/MySkills";
import { MyWorks } from "./layout/sections/myWorks/MyWorks";
import { Connection } from "./layout/sections/connection/Сonnection";
import { MyLocation } from "./components/MyLocation";
import { Footer } from "./layout/footer/Footer";
import { thems } from "./styles/Thems";

function App() {
  return (
    <div className="App">
      <MyFirstPortfolio>
        <Header />
        <Main />
        <MySkills />
        <MyWorks />
        <Connection />
        <MyLocation />
        <Footer />
      </MyFirstPortfolio>
    </div>
  );
}

export default App;

const MyFirstPortfolio = styled.div`
  background-color: ${thems.colors.primaryBg};
`;
