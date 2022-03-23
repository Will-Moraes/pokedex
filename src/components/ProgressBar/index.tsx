import React, {useEffect} from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {BarContainer, Progress} from './styles';

import {getStatsLimit, getColorType} from '../../utils/getPokeInfo';
import {useTheme} from 'styled-components';

interface ProgressPorps {
  atribute: string;
  value: number;
  pokemon_type: string;
}

export function ProgressBar({atribute, value, pokemon_type}: ProgressPorps) {
  const theme = useTheme();
  const {width} = Dimensions.get('screen');
  const bar = width - 130;
  const statsValueLimit = getStatsLimit(atribute);
  const barWidth = React.useRef(new Animated.Value(0)).current;
  const color = getColorType(pokemon_type);

  // Calculo
  const result = (bar / statsValueLimit) * value;

  // const finalWidth = width - 150;
  const finalWidth = result;

  useEffect(() => {
    Animated.spring(barWidth, {
      toValue: finalWidth,
      bounciness: 1,
      speed: 1,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <BarContainer>
      <Animated.View
        style={{
          backgroundColor: color,
          width: barWidth,
          height: 15,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        }}
      />
    </BarContainer>
  );
}
