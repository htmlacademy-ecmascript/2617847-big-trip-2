import { POINT_COUNTER } from '../presenter/presenter';
import { getRandomPoint } from '../mocks/points';

export default class PointsModel {
  points = [];

  init(){
    this.points = Array.from({length: POINT_COUNTER}, getRandomPoint);
  }

  getPoint(){
    return this.points;
  }
}
