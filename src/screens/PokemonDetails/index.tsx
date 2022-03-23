import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  Header,
  BackButton,
  Icon,
  ImageContent,
  PokeImgPng,
  InfoContent,
  NavOptions,
  WrapperNavOptions,
  OptionNav,
  DataContent,
  Row,
  Title,
  InfoText,
  TypesContent,
  InfoButton,
  InfoButtonText,
  InfoButtonContent,
  StatsContent,
  RowStats,
  Value,
  TitleStats,
  EvolutionContent,
  ArrowDown,
  EvolutionsContent,
  PokeItem,
} from './styles';

import {api} from '../../services/api';
import {PokemonDTO} from '../../dtos/PokemonDTO';
import {getColorType, getStatsAbbreviation} from '../../utils/getPokeInfo';
import {Load} from '../../components/Load';
import {PokemonType} from '../../components/PokemonType';
import {ProgressBar} from '../../components/ProgressBar';
import {PokemonEvolution} from '../../components/PokemonEvolution';

interface PokemonListPorps {
  name: string;
  url: string;
}
export function PokemonDetails() {
  const navigation = useNavigation();
  const [select, setSelect] = useState('about');
  const [pokemon, setPokemon] = useState<PokemonDTO>();
  const route = useRoute();
  const {poke} = route.params as PokemonListPorps;
  const [typeColor, setTypeColor] = useState('#000');
  const [load, setLoad] = useState(true);
  const [firstPokeEvolve, setFirstPokeEvolve] = useState();
  const [secondPokeEvolve, setSecondPokeEvolve] = useState();
  const [thirdPokeEvolve, setThirdPokeEvolve] = useState();
  const [pokeEvolveLenght, setPokeEvolveLenght] = useState(0);
  const [pokeEvolveAll, setPokeEvolveAll] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    try {
      const pokeResult = await api.get(`/pokemon/${poke.name}`);
      // const pokeResult = await api.get('/pokemon/blissey');
      const color = getColorType(pokeResult.data.types[0].type.name);
      setPokemon(pokeResult.data);
      // console.log(color);
      setTypeColor(color);
      // pegar dados de evolucoes
      // https://pokeapi.co/api/v2/pokemon-species/2/
      // https://pokeapi.co/api/v2/evolution-chain/78/
      // const species = await api.get(`/pokemon-species/${pokemon?.id}/`);
      const species = await api.get(`/pokemon-species/${pokeResult.data.id}/`);
      // const chain_url = species.data.evolution_chain.url;
      // console.log(chain_url);
      // const chain = await api.get(chain_url);
      const chain = await api.get(species.data.evolution_chain.url);
      // console.log(pokemon.id);
      // console.log(pokemon.id);
      // console.log(pokemon.id);
      // console.log(pokemon.id);
      // console.log(chain.data.chain.species.name);
      // console.log(chain.data.chain.evolves_to[0].species.name);
      // console.log(chain.data.chain.evolves_to[0].evolves_to[0].species.name);
      // console.log(chain.data.chain.evolves_to.length);
      setPokeEvolveAll(chain.data.chain.evolves_to);
      setPokeEvolveLenght(chain.data.chain.evolves_to.length);
      setFirstPokeEvolve(chain.data.chain.species.name);
      setSecondPokeEvolve(chain.data.chain.evolves_to[0].species.name);
      setThirdPokeEvolve(
        chain.data.chain.evolves_to[0].evolves_to[0].species.name,
      );

      // setPokeEvolves([
      //   chain.data.chain.species.name,
      //   chain.data.chain.evolves_to[0].species.name,
      //   chain.data.chain.evolves_to[0].evolves_to[0].species.name,
      // ]);
      // fim evolucoes
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  return (
    <Container background_color={typeColor}>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" />
        </BackButton>
      </Header>
      {load ? (
        <Load />
      ) : (
        <>
          <ImageContent>
            <PokeImgPng
              source={{uri: pokemon.sprites.other.home.front_default}}
              resizeMode="contain"
            />
          </ImageContent>
          <InfoContent>
            <NavOptions>
              <WrapperNavOptions
                selected={select === 'about'}
                onPress={() => setSelect('about')}>
                <OptionNav selected={select === 'about'}>About</OptionNav>
              </WrapperNavOptions>
              <WrapperNavOptions
                selected={select === 'stats'}
                onPress={() => setSelect('stats')}>
                <OptionNav selected={select === 'stats'}>Stats</OptionNav>
              </WrapperNavOptions>
              <WrapperNavOptions
                selected={select === 'evolution'}
                onPress={() => setSelect('evolution')}>
                <OptionNav selected={select === 'evolution'}>
                  Evolution
                </OptionNav>
              </WrapperNavOptions>
            </NavOptions>
            <DataContent>
              {select === 'about' && (
                <>
                  <Row>
                    <Title>Name</Title>
                    <InfoText>{pokemon?.name}</InfoText>
                  </Row>
                  <Row>
                    <Title>Height</Title>
                    <InfoText>{pokemon?.height / 10} m</InfoText>
                  </Row>
                  <Row>
                    <Title>Weight</Title>
                    <InfoText>{pokemon?.weight / 10} Kg</InfoText>
                  </Row>
                  <Row>
                    <Title>Abilities</Title>
                    <InfoButton>
                      <InfoButtonContent>
                        <InfoButtonText>See All</InfoButtonText>
                      </InfoButtonContent>
                    </InfoButton>
                  </Row>
                  <Row>
                    <Title>Type</Title>
                    <TypesContent>
                      {pokemon?.types.map((type, index) => (
                        <PokemonType
                          title={pokemon?.types[index].type.name}
                          position_margin={true}
                          key={index}
                        />
                      ))}
                    </TypesContent>
                  </Row>
                </>
              )}
              {select === 'stats' && (
                <StatsContent>
                  {pokemon?.stats.map((stat, index) => (
                    <RowStats>
                      <TitleStats>
                        {getStatsAbbreviation(pokemon?.stats[index].stat.name)}
                      </TitleStats>
                      <Value>{pokemon?.stats[index].base_stat}</Value>
                      <ProgressBar
                        atribute={pokemon.stats[index].stat.name}
                        value={pokemon.stats[index].base_stat}
                        pokemon_type={pokemon?.types[0].type.name}
                        key={index}
                      />
                    </RowStats>
                  ))}
                </StatsContent>
              )}
              {select === 'evolution' && (
                <EvolutionContent>
                  {pokeEvolveLenght < 2 ? (
                    <>
                      {firstPokeEvolve && (
                        <>
                          <PokemonEvolution
                            type="large"
                            name={firstPokeEvolve}
                          />
                        </>
                      )}
                      {secondPokeEvolve && (
                        <>
                          <ArrowDown name="arrow-down" />
                          <PokemonEvolution
                            type="large"
                            name={secondPokeEvolve}
                          />
                        </>
                      )}
                      {thirdPokeEvolve && (
                        <>
                          <ArrowDown name="arrow-down" />
                          <PokemonEvolution
                            type="large"
                            name={thirdPokeEvolve}
                          />
                        </>
                      )}
                    </>
                  ) : (
                    // pokeEvolveAll.map((item, index) => (
                    //   <>
                    //   <EvolutionsContent>
                    //     <ArrowDown name="arrow-down" />
                    //     <Title>{item.species.name}</Title>
                    //   </EvolutionsContent>
                    //   </>
                    // ))
                    <>
                      <PokemonEvolution type="large" name={firstPokeEvolve} />
                      <EvolutionsContent
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        data={pokeEvolveAll}
                        numColumns={2}
                        renderItem={({item}) => (
                          <>
                            <PokeItem>
                              <PokemonEvolution
                                type="small"
                                name={item.species.name}
                              />
                            </PokeItem>
                          </>
                        )}
                      />
                    </>
                  )}
                </EvolutionContent>
              )}
            </DataContent>
          </InfoContent>
        </>
      )}
    </Container>
  );
}
