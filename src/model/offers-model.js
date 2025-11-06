import { mockOffers } from '../mocks/offers';

export default class OffersModel {
  offers = [];


  init(){
    this.offers = mockOffers;
  }

  getOffers(){
    return this.offers;
  }
}
