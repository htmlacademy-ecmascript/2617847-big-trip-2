// import EventPoint from '../view/trip-event-point.js';
// import EventList from '../view/trip-event-list-view.js';
// import EditForm from '../view/event-edit-form.js';
// import EventSorting from '../view/trip-events-sort-view.js';

// import { render } from '../render.js';


// export default class Presenter {
//   eventsListComponent = new EventList();


//   constructor ({boardContainer, pointsModel, offersModel, destinationsModel}) {
//     this.boardContainer = boardContainer;
//     this.pointModel = pointsModel;
//     this.offersModel = offersModel;
//     this.destinationsModel = destinationsModel;
//   }

//   init () {
//     this.pointModel = [...this.pointModel.getPoint()];
//     this.destinationsModel = [...this.destinationsModel.getDestination()];
//     this.offersModel = [...this.offersModel.getOffers()];

//     render(new EventSorting(), this.boardContainer);
//     render(this.eventsListComponent, this.boardContainer);

//     if (this.pointModel.length > 0) {
//       render(
//         new EditForm({
//           point: this.points,
//           offers: this.offers,
//           desinations: this.destinations
//         }), this.eventsListComponent.getElement()
//       );
//     }

//     for (let i = 0; i < this.pointModel.length; i++) {
//       render(new EventPoint({point: this.pointModel[i]}), this.eventsListComponent.getElement());
//     }
//   }
// }


import EventPoint from '../view/trip-event-point.js';
import EventList from '../view/trip-event-list-view.js';
import EventSorting from '../view/trip-events-sort-view.js';
import EditForm from '../view/event-edit-form.js';
import { render } from '../render.js';

export const POINT_COUNTER = 3;
export default class Presenter {

  eventsListComponent = new EventList();

  constructor({ boardContainer, pointsModel, destinationsModel, offersModel }) {
    this.boardContainer = boardContainer;
    this.pointModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    const points = this.pointModel.getPoint();
    const destinations = this.destinationsModel.getDestination();
    const offers = this.offersModel.getOffers();

    render(new EventSorting(), this.boardContainer);


    render(this.eventsListComponent, this.boardContainer);


    if (points.length > 0) {

      const editForm = new EditForm({
        point: points[0],
        destinations,
        offers
      });
      render(editForm, this.eventsListComponent.getElement());


      for (let i = 1; i < points.length; i++) {
        const eventPoint = new EventPoint({
          point: points[i],
          destinations,
          offers
        });
        render(eventPoint, this.eventsListComponent.getElement());
      }
    }
  }
}
