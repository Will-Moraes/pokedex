function getColorType(type: string) {
  switch (type) {
    case 'normal':
      return '#d3d2ad';
    case 'bug':
      return '#d1dd66';
    case 'fighting':
      return '#C02E2F';
    case 'ghost':
      return '#71589A';
    case 'electric':
      return '#e5c849';
    case 'flying':
      return '#AA8FF0';
    case 'steel':
      return '#B8B8D0';
    case 'psychic':
      return '#f280a2';
    case 'poison':
      return '#A53BA9';
    case 'fire':
      return '#F28871';
    case 'ice':
      return '#55c0db';
    case 'ground':
      return '#C6AC72';
    case 'water':
      return '#27a7c6';
    case 'dragon':
      return '#6F39F4';
    case 'rock':
      return '#B89F37';
    case 'grass':
      return '#43CC9A';
    case 'dark':
      return '#6F5848';
    case 'fairy':
      return '#F0ACF0';

    default:
      return '#000';
  }
}

function getStatsLimit(title: string) {
  switch (title) {
    case 'hp':
      return 255;
    case 'attack':
      return 255;
    case 'defense':
      return 255;
    case 'special-attack':
      return 255;
    case 'special-defense':
      return 255;
    case 'speed':
      return 255;

    default:
      return 100;
  }
}

function getStatsAbbreviation(title: string) {
  switch (title) {
    case 'special-attack':
      return 'Sp-atk';
    case 'special-defense':
      return 'Sp-def';

    default:
      return title;
  }
}

export {getColorType, getStatsLimit, getStatsAbbreviation};
