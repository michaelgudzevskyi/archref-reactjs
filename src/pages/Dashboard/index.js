import React from 'react';

import zapptsLogo from '~/assets/images/zappts.png';
import { Container, DescriptionContainer } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>ReactJS Structure</h1>
      <DescriptionContainer>
        <p>A ReactJS structure made by</p>
        <img src={zapptsLogo} alt="Zappts Logo" />
      </DescriptionContainer>
    </Container>
  );
}
