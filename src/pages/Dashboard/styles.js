import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.color};
    margin-top: 40px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  p {
    font-size: 20px;
    line-height: 32px;
  }

  img {
    width: 100px;
    margin-left: 10px;
    margin-top: 5px;
  }
`;
