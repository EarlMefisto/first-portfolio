import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/MainMenu";
import { MyServices } from "./layout/sections/myServices/MyServices";

function App() {
  return (
    <div className="App">
      <MyFirstPortfolio>
        <Header />
        <Main />
        <MyServices />
      </MyFirstPortfolio>
    </div>
  );
}

export default App;

const MyFirstPortfolio = styled.div`
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;


