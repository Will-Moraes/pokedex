import React from 'react';
import {Header} from '../../components/Header';

import {Container, PageContent} from './styles';

import {TrainerCard} from '../../components/TrainerCard';

export function Home() {
  return (
    <Container>
      <Header />
      <PageContent>
        <TrainerCard />
      </PageContent>
    </Container>
  );
}
