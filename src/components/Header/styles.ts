import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + RFValue(50)}px;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(15)}px;
  border-bottom-left-radius: ${RFValue(25)}px;
  border-bottom-right-radius: ${RFValue(25)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.shape};
`;
