import React from 'react';

import {Container, Title} from './styles';

import {getColorType} from '../../utils/getPokeInfo';

interface Props {
  title: string;
  position_margin: boolean;
}

export function PokemonType({title, position_margin}: Props) {
  const typeColor = getColorType(title);

  return (
    <Container
      title={title}
      type_color={typeColor}
      position_margin={position_margin}>
      <Title>{title}</Title>
    </Container>
  );
}
