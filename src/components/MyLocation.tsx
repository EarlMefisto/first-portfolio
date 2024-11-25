import styled from "styled-components";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitile";
import { SectionText } from "./SectionText";

export const MyLocation = () => {
  return (
    <StyledMyLocation>
      <Container>
        <SectionTitle>My Location</SectionTitle>
        <SectionText>My current location is...</SectionText>
        <GoogleMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301014.5093529799!2d27.264429562590674!3d53.88419040449878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQuiwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1732564049506!5m2!1sru!2sby"
            width={"970px"}
            height={"300px"}
            loading="lazy"
          ></iframe>
        </GoogleMap>
        <YandexMap>
          <iframe
            src="https://yandex.by/map-widget/v1/?ll=27.727503%2C53.882847&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDExNxIc0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiIKDQ5y3EEVZpxXQg%2C%2C&tab=attractions&utm_campaign=general_by_desktop_no_all&utm_medium=dstore_bro&utm_source=services&z=10.83"
            width={"970px"}
            height={"300px"}
          ></iframe>
        </YandexMap>
      </Container>
    </StyledMyLocation>
  );
};

const StyledMyLocation = styled.section``;
const GoogleMap = styled.map`
  display: flex;
  justify-content: center;

  margin-bottom: 20px;
`;
const YandexMap = styled.map`
  display: flex;
  justify-content: center;

  margin-bottom: 35px;
`;
