import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { MyServices } from "./layout/sections/myServices/MyServices";
import { RightMenu } from "./components/menu/RightMenu/RightMenu";
import { PricePlans } from "./layout/sections/pricePlans/PricePlans";
import { Portfolio } from "./layout/sections/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <MyFirstPortfolio>
        <Header />
        <Main />
        <RightMenu/>
        <MyServices />
        <PricePlans />
        <Portfolio/>
      </MyFirstPortfolio>
    </div>
  );
}

export default App;

const MyFirstPortfolio = styled.div`
  background-color: #f5f5f5;
`;
