import Filters from './view/filters-view.js';
import Presenter from './presenter/presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destination-model.js';
import OffersModel from './model/offers-model.js';

import { render } from './render';

const tripEvents = document.querySelector('.trip-events');
const tripFilters = document.querySelector('.trip-controls__filters');


const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();

pointsModel.init();
destinationsModel.init();
offersModel.init();

const boardPresenter = new Presenter({boardContainer: tripEvents, pointsModel, destinationsModel,offersModel});


render(new Filters(), tripFilters);

boardPresenter.init();
