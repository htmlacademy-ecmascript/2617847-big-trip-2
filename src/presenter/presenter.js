import EventPoint from '../view/trip-event-point.js';
import EventList from '../view/trip-event-list-view.js';


import { render } from '../render.js';

const POINT_COUNTER = 3;

export default class BoardPresenter{

  eventsListComponent = new EventList();


  constructor ({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init (){
    render(this.eventsListComponent, this.boardContainer);

    for (let i = 0; i < POINT_COUNTER; i++) {
      render(new EventPoint, this.eventsListComponent.getElement());
    }
  }
}
