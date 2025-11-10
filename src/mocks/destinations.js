import { POINT_DESCRIPTIONS } from '../const';
import { getRandomArrayElement } from '../utils';


export const mockDestinations = [
  {
    id: 1,
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Chamonix',
    pictures: []
  },
  {
    id: 2,
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'Moscow',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=65',
        description: 'Building',
      }
    ]
  },
  {
    id: 3,
    description: getRandomArrayElement(POINT_DESCRIPTIONS),
    name: 'London',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=35',
        description: 'London Tower Building',
      }
    ]
  }
];
