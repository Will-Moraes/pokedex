import React, {useEffect, useState} from 'react';

import {
  Container,
  PokeImgPng,
  LeftContent,
  IdText,
  NameText,
  RightContent,
} from './styles';

import {api} from '../../services/api';
import {PokemonDTO} from '../../dtos/PokemonDTO';

interface Props {
  name: string;
  type: 'small' | 'large';
}

export function PokemonEvolution({name, type}: Props) {
  const [pokemon, setPokemon] = useState<PokemonDTO>();

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    try {
      const result = await api.get(`/pokemon/${name}/`);
      setPokemon(result.data);
    } catch (error) {}
  }
  return (
    <Container type={type}>
      <LeftContent>
        <IdText>#{pokemon?.id}</IdText>
        <NameText>{pokemon?.name}</NameText>
      </LeftContent>
      <RightContent>
        <PokeImgPng
          source={{
            uri: pokemon?.sprites.other.home.front_default,
          }}
          resizeMode="contain"
        />
      </RightContent>
    </Container>
  );
}
