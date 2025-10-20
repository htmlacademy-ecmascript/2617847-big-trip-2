import EventForm from './view/trip-events-form-view';
import { render } from './render';

const pageMain = document.querySelector('.page-body__container');
const tripEvents = pageMain.querySelector('.trip-events');

render(new EventForm(), tripEvents);

