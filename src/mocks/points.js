import { POINT_TYPES, POINT_DESTINATION_IDS } from '../const.js';
import { mockOffers } from './offers.js';
import { getRandomInteger, getRandomArrayElement } from '../utils.js';

export function getRandomPoint() {
  const type = getRandomArrayElement(POINT_TYPES);
  const basePrice = getRandomInteger(20, 400);
  const destinationId = getRandomArrayElement(POINT_DESTINATION_IDS);

  const now = Date.now();
  const dateFrom = new Date(now - getRandomInteger(0, 7) * 24 * 60 * 60 * 1000);
  const dateTo = new Date(dateFrom.getTime() + getRandomInteger(1, 12) * 60 * 60 * 1000);

  const offersCount = getRandomInteger(0, 2);
  const offers = [];
  for (let i = 0; i < offersCount; i++) {
    const randomOffer = getRandomArrayElement(mockOffers);
    offers.push({...randomOffer});
  }

  return {
    id: getRandomInteger(1, 1000),
    basePrice,
    dateFrom: dateFrom.toISOString(),
    dateTo: dateTo.toISOString(),
    destination: destinationId,
    isFavorite: Math.random() > 0.5,
    offers,
    type
  };
}
