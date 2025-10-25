import EventPoint from '../view/trip-event-point.js';
import EventList from '../view/trip-event-list-view.js';
import EditForm from '../view/event-edit-form.js';
// import BoardComponent from '../view/board-component';
import { render } from '../render.js';

const POINT_COUNTER = 3;

export default class BoardPresenter{
  // BoardComponent = new BoardComponent();
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
