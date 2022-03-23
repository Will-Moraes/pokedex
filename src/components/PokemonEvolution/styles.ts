import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  type: 'small' | 'large';
}

export const Container = styled.View<Props>`
  ${({type}) =>
    type === 'large' &&
    css`
      width: 90%;
      border: ${RFValue(1)}px solid #d9dee2;
      border-radius: ${RFValue(13)}px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: ${RFValue(3)}px ${RFValue(30)}px;
      margin-bottom: ${RFValue(0)}px;
      background-color: #f2f4f7;
    `}

  ${({type}) =>
    type === 'small' &&
    css`
      width: 95%;
      border: ${RFValue(1)}px solid #d9dee2;
      border-radius: ${RFValue(13)}px;
      /* flex-direction: row; */
      align-items: center;
      justify-content: space-between;
      padding: ${RFValue(3)}px ${RFValue(3)}px;
      margin-bottom: ${RFValue(0)}px;
      background-color: #f2f4f7;
    `}
`;

export const PokeImgPng = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  margin-bottom: 5px;
`;

export const LeftContent = styled.View``;

export const RightContent = styled.View``;

export const IdText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(16)}px;
`;

export const NameText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.grey_dark};
  font-size: ${RFValue(20)}px;
  text-transform: capitalize;
`;
