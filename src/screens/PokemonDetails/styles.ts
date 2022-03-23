import styled, {css} from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native';

interface ContainerProps {
  background_color: string;
}

interface NavProps {
  selected: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  /* background-color: ${({theme}) => theme.colors.shape}; */
  background-color: ${({background_color}) => background_color};
`;
export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(20)}px;
  padding: ${RFValue(20)}px;
  padding-top: 0;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${RFValue(45)}px;
  padding: ${RFValue(10)}px;
  border: ${RFValue(1)}px solid black;
  border-radius: ${RFValue(45)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(25)}px;
`;

export const ImageContent = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-top: ${RFValue(200)}px;
  z-index: 1;
`;

export const PokeImgPng = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(270)}px;
  position: absolute;
  bottom: -${RFValue(35)}px;
`;

export const InfoContent = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
  border-top-right-radius: ${RFValue(35)}px;
  border-top-left-radius: ${RFValue(35)}px;
  z-index: 0;
  padding: ${RFValue(20)}px;
`;

export const NavOptions = styled.View`
  width: 100%;
  flex-direction: row;
  padding: ${RFValue(15)}px ${RFValue(5)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const WrapperNavOptions = styled.TouchableOpacity<NavProps>`
  margin-right: ${RFValue(20)}px;
  ${({selected}) =>
    selected &&
    css`
      color: red;
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${({theme}) => theme.colors.primary};
      padding-bottom: ${RFValue(10)}px;
    `}
`;

export const OptionNav = styled.Text<NavProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(15)}px;
  ${({selected}) =>
    selected &&
    css`
      color: ${({theme}) => theme.colors.primary};
    `}
`;

export const DataContent = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  padding: ${RFValue(10)}px 0;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(15)}px;
  width: 50%;
  text-transform: capitalize;
`;

export const InfoText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(15)}px;
  text-transform: capitalize;
  width: 50%;
  text-align: right;
`;
export const TypesContent = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: flex-end;
`;
export const InfoButton = styled.TouchableOpacity``;

export const InfoButtonContent = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.text_blue};
  padding-bottom: ${RFValue(3)}px;
`;

export const InfoButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_blue};
  font-size: ${RFValue(15)}px;
`;

export const RowStats = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFValue(15)}px;
`;

export const TitleStats = styled.Text`
  width: 20%;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  text-transform: capitalize;
  margin-right: ${RFValue(10)}px;
  text-align: left;
`;

export const Value = styled.Text`
  width: 10%;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(15)}px;
  margin-right: ${RFValue(10)}px;
`;

export const StatsContent = styled.View`
  width: 100%;
`;

export const EvolutionContent = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const ArrowDown = styled(Feather)`
  font-size: ${RFValue(18)}px;
`;

export const EvolutionsContent = styled(FlatList)`
  flex: 1;
  width: 90%;
  background-color: red;
`;

export const PokeItem = styled.View`
  width: 50%;
`;
