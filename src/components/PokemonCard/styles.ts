import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {SvgUri} from 'react-native-svg';

interface Props {
  background_color: string;
}

export const Container = styled.TouchableOpacity<Props>`
  width: ${RFValue(145)}px;
  height: ${RFValue(190)}px;
  border-radius: ${RFValue(13)}px;
  margin-bottom: ${RFValue(13)}px;
  margin-right: ${RFValue(13)}px;
  background-color: ${({background_color}) => background_color};
`;
export const ImgContent = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const PokemonImg = styled(SvgUri).attrs({
  width: 100,
  height: 100,
})``;

export const PokeImgPng = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
`;

export const FooterContent = styled.View`
  flex: 1;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(13)}px;
  border-top-left-radius: ${RFValue(15)}px;
  border-top-right-radius: ${RFValue(15)}px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const InfoContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NameText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(15)}px;
  text-transform: capitalize;
`;

export const IdText = styled.Text`
  width: 100%;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.grey_dark};
  font-size: ${RFValue(14)}px;
  position: absolute;
  text-align: right;
  padding-right: ${RFValue(5)}px;
  padding-top: ${RFValue(10)}px;
`;

export const TypeContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(10)}px;
`;
