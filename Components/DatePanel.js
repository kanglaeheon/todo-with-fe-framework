import styled from "styled-components";

export const DatePanelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Today = styled.div``;

const newDate = new Date();
const today = `${newDate.getFullYear()}. ${
  newDate.getMonth() + 1
}. ${newDate.getDate()}`;

export const DatePanel = () => {
  return (
    <DatePanelContainer>
      <Today>{today}</Today>
    </DatePanelContainer>
  );
};
