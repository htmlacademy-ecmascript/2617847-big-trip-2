import Filters from './view/filters-view.js';
import EventSorting from './view/trip-events-sort-view.js';
import BoardPresenter from './presenter/presenter.js';
import { render } from './render';

const tripEvents = document.querySelector('.trip-events');
const tripFilters = document.querySelector('.trip-controls__filters');

const boardPresenter = new BoardPresenter({boardContainer: tripEvents});

render(new Filters(), tripFilters);
render(new EventSorting(), tripEvents);

boardPresenter.init();
