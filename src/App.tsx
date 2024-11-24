import "./App.css";
import styled from "styled-components";
import { Main } from "./layout/sections/main/Main";
import { Footer } from "./layout/footer/Footer";
import { MySkills } from "./layout/sections/mySkills/MySkills";
import { Header } from "./layout/header/Header";
import { MyWorks } from "./layout/sections/myWorks/MyWorks";
import { thems } from "./styles/Thems";
import { LeaveInfo } from "./layout/sections/leaveInfo/LeaveInfo";

function App() {
  return (
    <div className="App">
      <MyFirstPortfolio>
        {/* <Header /> */}
        <Main />
        <MySkills />
        <MyWorks />
        <LeaveInfo />
        <Footer />
      </MyFirstPortfolio>
    </div>
  );
}

export default App;

const MyFirstPortfolio = styled.div`
  background-color: ${thems.colors.primaryBg};
`;
