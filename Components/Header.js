import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: black;
  width: 500px;
  border-bottom: 4px solid royalblue;
  text-align: center;
`;

const title = `< Today's TODO >`;

export const Header = () => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  );
};
