import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  PokemonImg,
  PokeImgPng,
  InfoContent,
  NameText,
  IdText,
  ImgContent,
  TypeContent,
  FooterContent,
} from './styles';

import {api} from '../../services/api';
import {getColorType} from '../../utils/getPokeInfo';
import {PokemonDTOP} from '../../dtos/PokemonDTO';
import {PokemonType} from '../PokemonType';
import {Load} from '../Load';

interface PokeCardProps {
  name: string;
  onPress: () => void;
}

export function PokemonCard({name, onPress}: PokeCardProps) {
  const [pokemon, setPokemon] = useState<PokemonDTOP | undefined>();
  const [load, setLoad] = useState(true);
  const [typeColor, setTypeColor] = useState('#FFF');

  // const url =
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';
  // console.log(name);
  // try {
  //   const pokeResult = api.get(`/pokemon/${name}`);
  //   setPokemon(pokeResult.data);
  // } catch (error) {}

  // const pokeResult = api.get(`/pokemon/${name}`);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokeResult = await api.get(`/pokemon/${name}`);
        const color = getColorType(pokeResult.data.types[0].type.name);
        setPokemon(pokeResult.data);
        // console.log(pokeResult.data.types[0].type.name);
        setTypeColor(color);
        if (pokeResult) {
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <Container background_color="#d8d2d2" onPress={onPress}>
      {!pokemon ? (
        <Load />
      ) : (
        <>
          <ImgContent>
            <IdText>#{pokemon.id}</IdText>
            <PokeImgPng
              source={{uri: pokemon.sprites.other.home.front_default}}
              resizeMode="contain"
            />
          </ImgContent>
          <FooterContent>
            <InfoContent>
              <NameText numberOfLines={1}>{pokemon.name}</NameText>
              {/* <IdText>#{pokemon.id}</IdText> */}
            </InfoContent>
            <TypeContent>
              {pokemon.types.map((type, index) => (
                <PokemonType
                  title={pokemon.types[index].type.name}
                  position_margin={false}
                  key={index}
                />
              ))}
            </TypeContent>
          </FooterContent>
        </>
      )}
    </Container>
  );
}
