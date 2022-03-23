import styled from 'styled-components/native';
import {ScrollView, FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface PokemonProp {
  name: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const PageScroll = styled(ScrollView)``;

export const Content = styled.View`
  width: 100%;
  padding: ${RFValue(20)}px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(16)}px;
`;

export const Teste = styled.Text``;

export const PokemonList = styled(
  FlatList as new () => FlatList<PokemonProp>,
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})`
  flex: 1;
  /* width: 100%;
  flex-direction: row; */
  /* flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; */
`;
