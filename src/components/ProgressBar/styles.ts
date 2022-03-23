import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const BarContainer = styled.View`
  width: ${RFValue(195)}px;
  height: ${RFValue(15)}px;
  background-color: ${({theme}) => theme.colors.grey_light};
`;
