import "./App.css";
import styled from "styled-components";
import { Main } from "./layout/sections/main/Main";
import { MyServices } from "./layout/sections/myServices/MyServices";
import { RightMenu } from "./components/menu/RightMenu/RightMenu";
import { PricePlans } from "./layout/sections/pricePlans/PricePlans";
import { Portfolio } from "./layout/sections/portfolio/Portfolio";
import { Blog } from "./layout/sections/blog/Blog";
import { Recommendations } from "./layout/sections/recommendations/Recommendations";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { LogoBoard } from "./layout/sections/logoBoard/LogoBoard";

function App() {
  return (
    <div className="App">
      <MyFirstPortfolio>
        <Main />
        <RightMenu />
        <MyServices />
        <PricePlans />
        <Recommendations />
        <Portfolio />
        <Blog />
        <Contacts />
        <LogoBoard/>
        <Footer/>
      </MyFirstPortfolio>
    </div>
  );
}

export default App;

const MyFirstPortfolio = styled.div`
  background-color: #f5f5f5;
`;
