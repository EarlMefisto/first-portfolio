import "./App.css";
import styled from "styled-components";
import { Main } from "./layout/sections/main/Main";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { MySkills } from "./layout/sections/mySkills/MySkills";
import { Header } from "./layout/header/Header";
import { MyWorks } from "./layout/sections/myWorks/MyWorks";
import { thems } from "./styles/Thems";


function App() {
  return (
    <div className="App">
      <MyFirstPortfolio>
        <Header/>
        <Main />
        <MySkills/>
        <MyWorks/>
        <Contacts />
        <Footer />
      </MyFirstPortfolio>
    </div>
  );
}

export default App;

const MyFirstPortfolio = styled.div`
background-color: ${thems.colors.primaryBg};
`;
