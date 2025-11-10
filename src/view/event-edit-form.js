// import { createElement } from '../render';
// import { POINT_TYPES } from '../const';
// import dayjs from 'dayjs';


// function createEditFormTemplate (){
//   return `
//  <li class="trip-events__item">
//               <form class="event event--edit" action="#" method="post">
//                 <header class="event__header">
//                   <div class="event__type-wrapper">
//                     <label class="event__type  event__type-btn" for="event-type-toggle-1">
//                       <span class="visually-hidden">Choose event type</span>
//                       <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
//                     </label>
//                     <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

//                     <div class="event__type-list">
//                       <fieldset class="event__type-group">
//                         <legend class="visually-hidden">Event type</legend>

//                         <div class="event__type-item">
//                           <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
//                           <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
//                           <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
//                           <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
//                           <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
//                           <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
//                           <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
//                           <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
//                           <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
//                         </div>

//                         <div class="event__type-item">
//                           <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
//                           <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
//                         </div>
//                       </fieldset>
//                     </div>
//                   </div>

//                   <div class="event__field-group  event__field-group--destination">
//                     <label class="event__label  event__type-output" for="event-destination-1">
//                       Flight
//                     </label>
//                     <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
//                     <datalist id="destination-list-1">
//                       <option value="Amsterdam"></option>
//                       <option value="Geneva"></option>
//                       <option value="Chamonix"></option>
//                     </datalist>
//                   </div>

//                   <div class="event__field-group  event__field-group--time">
//                     <label class="visually-hidden" for="event-start-time-1">From</label>
//                     <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
//                     &mdash;
//                     <label class="visually-hidden" for="event-end-time-1">To</label>
//                     <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
//                   </div>

//                   <div class="event__field-group  event__field-group--price">
//                     <label class="event__label" for="event-price-1">
//                       <span class="visually-hidden">Price</span>
//                       &euro;
//                     </label>
//                     <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
//                   </div>

//                   <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
//                   <button class="event__reset-btn" type="reset">Delete</button>
//                   <button class="event__rollup-btn" type="button">
//                     <span class="visually-hidden">Open event</span>
//                   </button>
//                 </header>
//                 <section class="event__details">
//                   <section class="event__section  event__section--offers">
//                     <h3 class="event__section-title  event__section-title--offers">Offers</h3>

//                     <div class="event__available-offers">
//                       <div class="event__offer-selector">
//                         <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
//                         <label class="event__offer-label" for="event-offer-luggage-1">
//                           <span class="event__offer-title">Add luggage</span>
//                           &plus;&euro;&nbsp;
//                           <span class="event__offer-price">50</span>
//                         </label>
//                       </div>

//                       <div class="event__offer-selector">
//                         <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>
//                         <label class="event__offer-label" for="event-offer-comfort-1">
//                           <span class="event__offer-title">Switch to comfort</span>
//                           &plus;&euro;&nbsp;
//                           <span class="event__offer-price">80</span>
//                         </label>
//                       </div>

//                       <div class="event__offer-selector">
//                         <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
//                         <label class="event__offer-label" for="event-offer-meal-1">
//                           <span class="event__offer-title">Add meal</span>
//                           &plus;&euro;&nbsp;
//                           <span class="event__offer-price">15</span>
//                         </label>
//                       </div>

//                       <div class="event__offer-selector">
//                         <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
//                         <label class="event__offer-label" for="event-offer-seats-1">
//                           <span class="event__offer-title">Choose seats</span>
//                           &plus;&euro;&nbsp;
//                           <span class="event__offer-price">5</span>
//                         </label>
//                       </div>

//                       <div class="event__offer-selector">
//                         <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
//                         <label class="event__offer-label" for="event-offer-train-1">
//                           <span class="event__offer-title">Travel by train</span>
//                           &plus;&euro;&nbsp;
//                           <span class="event__offer-price">40</span>
//                         </label>
//                       </div>
//                     </div>
//                   </section>

//                   <section class="event__section  event__section--destination">
//                     <h3 class="event__section-title  event__section-title--destination">Destination</h3>
//                     <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>
//                   </section>
//                 </section>
//               </form>
//             </li>
//   `;
// }

// export default class EditForm {
//   getTemplate(){
//     return createEditFormTemplate();
//   }

//   getElement(){
//     if(!this.element) {
//       this.element = createElement(this.getTemplate());
//       return this.element;
//     }
//   }


//   removeElement(){
//     this.element = null;
//   }
// }

import { createElement } from '../render.js';
import dayjs from 'dayjs';
import { POINT_TYPES } from '../const.js';

function createEditFormTemplate(point, destinations, offers) {
  const { type, destination: destinationId, basePrice, dateFrom, dateTo, offers: offerIds } = point;

  const destination = destinations.find((d) => d.id === destinationId);
  const destinationName = destination ? destination.name : '';

  const pointOffers = offerIds
    .map((id) => offers.find((o) => o.id === id))
    .filter(Boolean);

  const formatInputDate = (date) => dayjs(date).format('DD/MM/YY HH:mm');

  const typeOptions = POINT_TYPES.map((t) => `
      <div class="event__type-item">
        <input
          id="event-type-${t}-edit"
          class="event__type-input visually-hidden"
          type="radio"
          name="event-type"
          value="${t}"
          ${t === type ? 'checked' : ''}
        >
        <label class="event__type-label event__type-label--${t}" for="event-type-${t}-edit">
          ${t.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
        </label>
      </div>
    `).join('');

  const destinationOptions = destinations
    .map((d) => `<option value="${d.name}"></option>`)
    .join('');

  const availableOffers = offers;
  const offersCheckboxes = availableOffers.map((offer) => {
    const isChecked = pointOffers.some((o) => o.id === offer.id);
    return `
      <div class="event__offer-selector">
        <input
          class="event__offer-checkbox visually-hidden"
          id="event-offer-${offer.id}"
          type="checkbox"
          name="event-offer"
          value="${offer.id}"
          ${isChecked ? 'checked' : ''}
        >
        <label class="event__offer-label" for="event-offer-${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>
    `;
  }).join('');

  const destinationDescription = destination ? destination.description : 'No description available.';

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type event__type-btn" for="event-type-toggle-edit">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle-edit" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${typeOptions}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group event__field-group--destination">
            <label class="event__label event__type-output" for="event-destination-edit">
              ${type.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </label>
            <input
              class="event__input event__input--destination"
              id="event-destination-edit"
              type="text"
              name="event-destination"
              value="${destinationName}"
              list="destination-list-edit"
            >
            <datalist id="destination-list-edit">
              ${destinationOptions}
            </datalist>
          </div>

          <div class="event__field-group event__field-group--time">
            <label class="visually-hidden" for="event-start-time-edit">From</label>
            <input
              class="event__input event__input--time"
              id="event-start-time-edit"
              type="text"
              name="event-start-time"
              value="${formatInputDate(dateFrom)}"
            >
            &mdash;
            <label class="visually-hidden" for="event-end-time-edit">To</label>
            <input
              class="event__input event__input--time"
              id="event-end-time-edit"
              type="text"
              name="event-end-time"
              value="${formatInputDate(dateTo)}"
            >
          </div>

          <div class="event__field-group event__field-group--price">
            <label class="event__label" for="event-price-edit">
              <span class="visually-hidden">Price</span>&euro;
            </label>
            <input
              class="event__input event__input--price"
              id="event-price-edit"
              type="text"
              name="event-price"
              value="${basePrice}"
            >
          </div>

          <button class="event__save-btn btn btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Cancel</span>
          </button>
        </header>

        <section class="event__details">
          <section class="event__section event__section--offers">
            <h3 class="event__section-title event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${offersCheckboxes}
            </div>
          </section>

          <section class="event__section event__section--destination">
            <h3 class="event__section-title event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destinationDescription}</p>
          </section>
        </section>
      </form>
    </li>
  `;
}


export default class EditForm {
  constructor({ point, destinations, offers }) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEditFormTemplate(this.point, this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
