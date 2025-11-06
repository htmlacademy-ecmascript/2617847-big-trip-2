import { mockDestinations } from '../mocks/destinations';

export default class DestinationsModel {
  destinations = [];

  init(){
    this.destination = mockDestinations;
  }

  getDestination(){
    return this.destination;
  }
}
