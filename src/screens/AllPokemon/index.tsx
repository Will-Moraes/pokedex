import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {Container, Content, PageScroll, Teste, PokemonList} from './styles';

import {RootStackParamList} from '../../utils/RootStackParams';
import {api} from '../../services/api';

import {Header} from '../../components/Header';
import {PokemonCard} from '../../components/PokemonCard';
import {Load} from '../../components/Load';
import {PokemonDTOP} from '../../dtos/PokemonDTO';

type navigationProps = NativeStackNavigationProp<RootStackParamList>;

interface PokemonListPorps {
  name: string;
  url: string;
}

export function AllPokemon() {
  const navigation = useNavigation<navigationProps>();
  const [pokemons, setPokemons] = useState<PokemonListPorps[]>([]);
  const [load, setLoad] = useState(true);

  // Pokemon scroll refresh

  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20

  const [data, setData] = useState([]);
  const [apiLoading, setApiLoading] = useState(false);
  const [pokeListInitial, setPokeListInitial] = useState(0);
  // end Pokemon scroll refresh

  function handlePokemonDetail(poke: PokemonListPorps) {
    // console.log(poke);
    navigation.navigate('PokemonDetails', {poke});
  }

  // useEffect(() => {
  //   async function fetchPokemon() {
  //     try {
  //       const pokemonList = await api.get('/pokemon');

  //       setPokemons(pokemonList.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoad(false);
  //     }
  //   }

  //   fetchPokemon();
  // }, []);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (apiLoading) {
      return;
    }
    setApiLoading(true);

    try {
      const pokemonList = await api.get(
        `/pokemon?offset=${pokeListInitial}&limit=20`,
      );

      setPokemons([...pokemons, ...pokemonList.data.results]);
      setPokeListInitial(pokeListInitial + 20);
      setApiLoading(false);
      console.log(apiLoading);
    } catch (error) {
      console.log(error);
    } finally {
      setApiLoading(false);
      setLoad(false);
    }
  }

  return (
    <Container>
      <Header />
      {load ? (
        <Load />
      ) : (
        <PokemonList
          data={pokemons}
          keyExtractor={item => item.name}
          numColumns={2}
          showVerticalScrollIndicator={false}
          showHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <PokemonCard
              name={item.name}
              key={item.name}
              onPress={() => handlePokemonDetail(item)}
            />
          )}
          onEndReached={loadApi}
          onEndReachedThreshold={0.1}
          ListFooterComponent={apiLoading && <Load />}
        />
      )}
    </Container>
  );
}
